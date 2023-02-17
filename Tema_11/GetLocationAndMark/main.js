document.addEventListener("DOMContentLoaded", async function () {
    initMap();
});

function initMap() {
    const mymap = L.map('mapid').setView([51.505, -0.09], 13);
    let marker = null;
    const latlngs = [];

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(mymap);

    function onLocationFound(e) {
        const radius = e.accuracy / 2;
        if (marker) {
            mymap.removeLayer(marker);
        }
        marker = L.marker(e.latlng).addTo(mymap);
        mymap.setView(e.latlng, 16);
        latlngs.push(e.latlng);
        L.polyline(latlngs, { color: 'red' }).addTo(mymap);
    }

    function onLocationError(e) {
        alert(e.message);
    }

    mymap.on('locationfound', onLocationFound);
    mymap.on('locationerror', onLocationError);

    mymap.locate({ setView: true, maxZoom: 16 });
}
