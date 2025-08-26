# State Model (v1)
 - state.query: string
 - state.location: { name, country lat, lon } | null
 - state.weather: { tempC, tempF, feelsLikeC, feelsLikeF, description, iconCode, fetchedAt } | null
 - state.stateus: "idle" | "loading" | "ready" | "error"
 - state.error: string or null