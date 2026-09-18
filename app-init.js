// ⚙️ Core Application Settings Provider Module (Backend Integration)
(function(w){
    const defaultConfig = {
        apiKey: 'AIzaSyBXSDEjntloZw1yttnDVbhQyfG4hyZshjk',
        authDomain: 'clearanceportal-128f9.firebaseapp.com',
        projectId: 'clearanceportal-128f9',
        storageBucket: 'clearanceportal-128f9.firebasestorage.app',
        messagingSenderId: '804066048860',
        appId: '1:804066048860:web:a5d95ccf266b127d589f99',
        measurementId: 'G-2Z3QBGG7FE'
    };

    w.firebaseConfig = defaultConfig;

    w.firebaseConfigPromise = (async function() {
        const endpoints = ['./api/app-init', './app-init.php', 'api/app-init'];
        for (const ep of endpoints) {
            try {
                const res = await fetch(ep);
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.apiKey) {
                        w.firebaseConfig = data;
                        return data;
                    }
                }
            } catch (e) {
                // Ignore and try next endpoint
            }
        }
        return defaultConfig;
    })();
})(window);
