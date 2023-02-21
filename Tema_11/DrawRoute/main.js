document.addEventListener("DOMContentLoaded", async function () {
    initMap();
});

function initMap() {
    const map = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    const routeControl = L.Routing.control({
        waypoints: [
            L.latLng(51.5, -0.1),
            L.latLng(51.5, -0.12),
            L.latLng(52, 1)
        ]
    }).addTo(map);

    routeControl.on('routesfound', function (e) {
        var routes = e.routes;
        var summary = routes[0].summary;
        // alert time and distance in km and minutes
        alert('Total distance is ' + summary.totalDistance / 1000 + ' km and total time is ' + Math.round(summary.totalTime % 3600 / 60) + ' minutes');
    });
}