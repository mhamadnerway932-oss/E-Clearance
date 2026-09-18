// ⚙️ Core Application Settings Provider Module (Backend Dynamic Loader)
(function(w){
    w.firebaseConfig = null;

    w.firebaseConfigPromise = (async function() {
        const endpoints = ['/api/app-init', './api/app-init', './app-init.php'];
        for (const ep of endpoints) {
            try {
                const res = await fetch(ep, { cache: 'no-store' });
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.apiKey) {
                        w.firebaseConfig = data;
                        return data;
                    }
                }
            } catch (e) {
                // Ignore and try next backend endpoint
            }
        }
        return w.firebaseConfig;
    })();
})(window);
