
export async function geocode(city) {
    console.log('geocode called with:', city);
    // TODO: fetch from open-meteo.com geocoding API
    return { name: 'Austin', country: 'US', lat: 30.27, long: -97.74 };
}

export async function getCurrent(lat, lon) {
    console.log('getCurrent called with:', lat, lon);
    // TODO: fetch from Open-Meteo API
    return {
        tempC: 30,
        feelsLikeC: 32,
        description: 'Sunny',
        iconCode: 0,
    };
}