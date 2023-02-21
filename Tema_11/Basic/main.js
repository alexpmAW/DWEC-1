document.addEventListener("DOMContentLoaded", async function () {
    initMap();
});

function initMap() {
    const mymap = L.map('mapid').setView([0, 0], 13);

    mymap.flyTo([42.46309052000472, -2.441003322601319], 8)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(mymap);

    L.marker([51.5, -0.09]).addTo(mymap)
        .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

    let lat, lng;

    mymap.addEventListener('mousemove', function (ev) {
        lat = ev.latlng.lat;
        lng = ev.latlng.lng;
    });

    document.getElementById("mapid").addEventListener("contextmenu", function (event) {
        event.preventDefault();
        alert(lat + ' - ' + lng);
        return false;
    })
}
