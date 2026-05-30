// ─── maps.js ──────────────────────────────────────────────
// Leaflet + OpenStreetMap hospital finder (5km radius)
// Shows map markers + hospital cards with distance & phone
// ─────────────────────────────────────────────────────────

let mapInstance = null;
let userLat = null;
let userLng = null;

function openMaps() {
  const t = T[lang];

  document.getElementById('mapTitle').textContent = t.mapTitle;
  document.getElementById('mapBackBtn').textContent = t.mapBack;
  document.getElementById('mapStatus').textContent = t.mapSearching;
  document.getElementById('hospitalList').innerHTML = '';

  showScreen('mapScreen');

  setTimeout(() => {
    if (!navigator.geolocation) {
      document.getElementById('mapStatus').textContent = t.mapError;
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userLat = pos.coords.latitude;
        userLng = pos.coords.longitude;
        initMap(userLat, userLng);
      },
      () => {
        document.getElementById('mapStatus').textContent = t.mapError;
      }
    );
  }, 200);
}

function initMap(lat, lng) {
  // Destroy previous map instance if exists
  if (mapInstance) {
    mapInstance.remove();
    mapInstance = null;
  }

  mapInstance = L.map('mapDiv').setView([lat, lng], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(mapInstance);

  // Blue dot — user location
  const userIcon = L.divIcon({
    className: '',
    html: '<div style="width:16px;height:16px;background:#2b6cb0;border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>',
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });

  L.marker([lat, lng], { icon: userIcon })
    .addTo(mapInstance)
    .bindPopup('📍 You are here')
    .openPopup();

  searchHospitals(lat, lng);
}

// Haversine formula — straight-line distance in km
function getDistanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function searchHospitals(lat, lng) {
  const t = T[lang];
  const radius = 5000;

  const query = `
    [out:json][timeout:25];
    (
      node["amenity"="hospital"](around:${radius},${lat},${lng});
      node["amenity"="clinic"](around:${radius},${lat},${lng});
      node["healthcare"="hospital"](around:${radius},${lat},${lng});
    );
    out body;
  `;

  const url = 'https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(query);

  fetch(url)
    .then(r => r.json())
    .then(data => {
      if (!data.elements || data.elements.length === 0) {
        document.getElementById('mapStatus').textContent = t.mapNone;
        return;
      }

      // Sort by distance
      const hospitals = data.elements.map(el => ({
        ...el,
        distance: getDistanceKm(lat, lng, el.lat, el.lon)
      })).sort((a, b) => a.distance - b.distance);

      document.getElementById('mapStatus').textContent =
        `🏥 ${hospitals.length} hospitals found nearby`;

      // Red hospital marker
      const hospIcon = L.divIcon({
        className: '',
        html: '<div style="width:28px;height:28px;background:#e63946;border:3px solid white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:0 2px 8px rgba(0,0,0,0.3);">🏥</div>',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const listEl = document.getElementById('hospitalList');
      listEl.innerHTML = '';

      hospitals.forEach((el, idx) => {
        const name    = el.tags?.name || 'Hospital';
        const phone   = el.tags?.phone || el.tags?.['contact:phone'] || null;
        const dist    = el.distance < 1
          ? Math.round(el.distance * 1000) + ' m away'
          : el.distance.toFixed(1) + ' km away';

        // Map marker
        const marker = L.marker([el.lat, el.lon], { icon: hospIcon })
          .addTo(mapInstance)
          .bindPopup(`<b>${name}</b><br>${dist}${phone ? '<br>📞 ' + phone : ''}`);

        // Hospital card
        const card = document.createElement('div');
        card.style.cssText = `
          background:var(--bg-card);
          border:1.5px solid #d9d4c7;
          border-radius:14px;
          padding:14px 16px;
          box-shadow:var(--shadow);
          display:flex;
          flex-direction:column;
          gap:6px;
          cursor:pointer;
        `;

        card.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
            <div style="font-size:15px;font-weight:700;color:var(--text);flex:1;">${name}</div>
            <div style="font-size:12px;font-weight:700;color:var(--accent);white-space:nowrap;">📍 ${dist}</div>
          </div>
          ${phone ? `
          <div style="display:flex;align-items:center;gap:8px;margin-top:2px;">
            <a href="tel:${phone}" onclick="event.stopPropagation()"
               style="background:#e63946;color:white;border:none;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:5px;">
              📞 ${phone}
            </a>
          </div>` : `
          <div style="font-size:12px;color:var(--text-muted);">No phone number listed</div>`}
        `;

        // Click card → pan map to marker and open popup
        card.onclick = () => {
          mapInstance.setView([el.lat, el.lon], 16);
          marker.openPopup();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        listEl.appendChild(card);
      });
    })
    .catch(() => {
      document.getElementById('mapStatus').textContent =
        '⚠️ Could not load hospitals. Check internet connection.';
    });
}
