
import { state, setState } from '../state/store.js';

export function render(current) {
    const container = document.getElementById('results');
    container.innerHTML = '';

    if (current.status === 'idle') {
        container.textContent = 'Enter a city to get started.';
    }

    if (current.status === 'loading') {
        container.textContent = 'Loading...';
    }

    if (current.status === 'error') {
        container.textContent = 'Error: ${current.error}';
    }

    if (current.status === 'ready' && current.weather) {
        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = '${current.location.name}: ${current.weather.tempC}°C (feels like ${current.weather.feelsLikeC}°C), ${current.weather.description}';
        container.appendChild(card);
    }
}

