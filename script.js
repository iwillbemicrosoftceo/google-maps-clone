const token = "pk.eyJ1IjoibGludXhjb29sIiwiYSI6ImNsanlxeDlteTA0djAzZXAyenZneDZxMnkifQ.6R7uQjlHZyG1CQvCi-DvDw"
mapboxgl.accessToken = token

// Location Grabbing
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

// Location Functions
function successLocation(position) { 
    //console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() { 
    console.error("Oh no! We could not determine where you are so you are in London!")
    alert("Oh no! We could not determine where you are so you are in London!")
    setupMap([-0.127758, 51.507351])
}

// Map Creating
function setupMap(c) { 
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/linuxcool/cljyr5eng00es01qn2vtg206q',
        center: c,
        zoom: 15
    });
    map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }),
        'top-left'
        );
    map.addControl(new mapboxgl.NavigationControl());
}
