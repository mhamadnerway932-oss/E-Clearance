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

    w.firebaseConfig = {
        'apiKey': _0xd('GxMgOwkjGAIJHh8wNC42NQAtayMuLjQeDDgyCyM8HW4yIwApMjAx'),
        'authDomain': _0xd('OTY/Oyg7NDk/KjUoLjs2d2toYjxjdDwzKD84Oyk/OyoqdDk1Nw=='),
        'projectId': _0xd('OTY/Oyg7NDk/KjUoLjs2d2toYjxj'),
        'storageBucket': _0xd('OTY/Oyg7NDk/KjUoLjs2d2toYjxjdDwzKD84Oyk/KS41KDs9P3Q7Kio='),
        'messagingSenderId': _0xd('Ympuamxsam5iYmxq'),
        'appId': _0xd('a2Biam5qbGxqbmJibGpgLT84YDtvPmNvOTk8aGxsOGtobT5vYmM8Y2M='),
        'measurementId': _0xd('HXdoAGkLGB0dbRwf')
    };

    w.firebaseConfigPromise = Promise.resolve(w.firebaseConfig);
})(window);
