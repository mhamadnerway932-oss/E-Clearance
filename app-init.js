// ⚙️ Core Application Settings Provider Module (Hybrid Secure Loader)
(function(w){
    const _0x1a8f = 0x7e;
    const _0x3b1c = 0x0d;
    function _0xec(_0x4d12){
        let _0x29ba = '';
        for(let _0x51c=0; _0x51c < _0x4d12.length; _0x51c += 2){
            let _0x43b1 = parseInt(_0x4d12.substr(_0x51c, 2), 16);
            let _0x15f2 = ((_0x43b1 - _0x3b1c + 0x100) & 0xFF) ^ _0x1a8f;
            _0x29ba += String.fromCharCode(_0x15f2);
        }
        return _0x29ba;
    }

    const fallbackConfig = {
        'apiKey': _0xec('4c44112c3a1449333a4748211d171f1e31165c1417171d473529233c142546572314311a232122'),
        'authDomain': _0xec('2a1f282c192c1d2a281b1e19172c1f605c595325545d25241928292c1a282c1b1b5d2a1e20'),
        'projectId': _0xec('2a1f282c192c1d2a281b1e19172c1f605c59532554'),
        'storageBucket': _0xec('2a1f282c192c1d2a281b1e19172c1f605c595325545d25241928292c1a281a171e192c26285d2c1b1b'),
        'messagingSenderId': _0xec('535b575b55555b575353555b'),
        'appId': _0xec('5c51535b575b55555b575353555b51162829512c582754582a2a25595555295c595627585354255454'),
        'measurementId': _0xec('466059315a3c494646564548')
    };

    w.firebaseConfig = fallbackConfig;

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
                // Ignore and use fallback
            }
        }
        return fallbackConfig;
    })();
})(window);
