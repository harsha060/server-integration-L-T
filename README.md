# Interactive Map App

This is a simple interactive web app that uses the Google Maps API to display locations based on user search queries.

## Features

- Search for locations by address or place name
- Displays the location on an interactive map with a marker
- Fetches JSON data from Google Geocoding API

## Setup

1. Obtain a Google Maps API key:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Geocoding API and Maps JavaScript API
   - Create credentials (API key)
   - Restrict the API key for security (e.g., by HTTP referrer or IP address)

2. Replace `YOUR_API_KEY` in `index.html` and `js/app.js` with your actual API key.

3. Open `index.html` in a web browser to run the app.

## Usage

- Enter a location in the search box (e.g., "1600 Amphitheatre Parkway, Mountain View, CA")
- Click the "Search" button or press Enter
- The map will center on the location and display a marker

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Maps JavaScript API
- Google Geocoding API

## Note

This app uses the Google Maps API, which has usage limits and requires billing setup for heavy usage. For development and testing, the free tier should suffice.