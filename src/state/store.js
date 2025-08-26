
import { render } from '../ui/app.js';

export const state = {
    query: '',
    location: null,
    weather: null,
    status: 'idle',
    error: null,
};

export function setState(updates) {
    Opject.assign(state, updates);
    render(state);
};