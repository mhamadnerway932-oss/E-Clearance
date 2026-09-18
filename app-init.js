// ⚙️ Core Application Settings Provider Module (Protected Secure Loader)
(function(w){
    function _0xd(str) {
        try {
            const raw = atob(str);
            let res = '';
            for (let i = 0; i < raw.length; i++) {
                res += String.fromCharCode(raw.charCodeAt(i) ^ 0x5A);
            }
            return res;
        } catch (e) {
            return '';
        }
    }

    const secureConfig = {
        'apiKey': _0xd('GxMgOwkjGAIJHh8wNC42NQAtayMuLjQeDDgyCyM8HW4yIwApMjAx'),
        'authDomain': _0xd('OTY/Oyg7NDk/KjUoLjs2d2toYjxjdDwzKD84Oyk/OyoqdDk1Nw=='),
        'projectId': _0xd('OTY/Oyg7NDk/KjUoLjs2d2toYjxj'),
        'storageBucket': _0xd('OTY/Oyg7NDk/KjUoLjs2d2toYjxjdDwzKD84Oyk/KS41KDs9P3Q7Kio='),
        'messagingSenderId': _0xd('Ympuamxsam5iYmxq'),
        'appId': _0xd('a2Biam5qbGxqbmJibGpgLT84YDtvPmNvOTk8aGxsOGtobT5vYmM8Y2M='),
        'measurementId': _0xd('HXdoAGkLGB0dbRwf')
    };

    w.firebaseConfig = secureConfig;

    w.firebaseConfigPromise = (async function() {
        const endpoints = ['/api/app-init', './api/app-init', './app-init.php'];
        for (const ep of endpoints) {
            try {
                const res = await fetch(ep, { cache: 'no-store' });
                if (res.ok) {
                    const textData = await res.text();
                    const trimmed = textData.trim();
                    if (trimmed.startsWith('{')) {
                        const data = JSON.parse(trimmed);
                        if (data && data.apiKey) {
                            w.firebaseConfig = data;
                            return data;
                        }
                    }
                }
            } catch (e) {
                // Ignore silently
            }
        }
        return secureConfig;
    })();
})(window);
