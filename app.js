let map;
let markers = [];

function initMap() {
    // Initialize the map centered on a default location (e.g., New York)
    const defaultLocation = { lat: 40.7128, lng: -74.0060 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: defaultLocation
    });

    // Add a default marker
    addMarker(defaultLocation, 'Default Location');
}

function addMarker(location, title) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: title
    });
    markers.push(marker);
}

function clearMarkers() {
    markers.forEach(marker => marker.setMap(null));
    markers = [];
}

async function searchLocation(query) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual Google Maps API key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(query)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'OK') {
            const result = data.results[0];
            const location = result.geometry.location;
            const formattedAddress = result.formatted_address;

            // Clear previous markers
            clearMarkers();

            // Add new marker
            addMarker(location, formattedAddress);

            // Center the map on the new location
            map.setCenter(location);
            map.setZoom(15);

            console.log('Location found:', formattedAddress);
        } else {
            alert('Location not found. Please try a different query.');
        }
    } catch (error) {
        console.error('Error fetching location data:', error);
        alert('An error occurred while searching for the location.');
    }
}

document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        searchLocation(query);
    } else {
        alert('Please enter a location to search.');
    }
});

document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = e.target.value.trim();
        if (query) {
            searchLocation(query);
        } else {
            alert('Please enter a location to search.');
        }
    }
});