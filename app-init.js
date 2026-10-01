window.firebaseConfigPromise = (async function () {
    try {
        const res = await fetch('/api/app-init', { cache: 'no-store' });
        if (res.ok) {
            const data = await res.json();
            if (data && data.apiKey) {
                window.firebaseConfig = data;
                return data;
            }
        }
    } catch (e) {
        console.error("Error fetching Firebase config:", e);
    }
    return null;
})();