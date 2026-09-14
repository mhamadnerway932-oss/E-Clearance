// 🛡️ Protected Module System (Obfuscated)
(function(){
    const _0xk = 0x4b;
    const _0xs = 0x09;
    const _0xtbl = ["", "", "99d0", "9aeb", "74", "41484738372e481d302d352b2e1d334848372f444841", "", "210c136f828786", "84", "", "", "838281888786857c", "838281888786857c7b", "7c85868788818283", "8484848484848484", "8383838383838383", "8282828282828282", "8181818181818181", "8888888888888888", "8787878787878787", "8686868686868686", "8585858585858585", "7c7c7c7c7c7c7c7c", "7b7b7b7b7b7b7b7b", "8382818883828188", "8383828281818888", "8382838283828382", "44334141452d4238", "43453742483b472b", "33413836352c2a2930", "838281888786857c7b84", "84838281888786857c7b", "838281818283838281", "85857c7c7b7b8484"];

    function _0xst(idx) {
        let hex = _0xtbl[idx];
        let bytes = [];
        for (let i = 0; i < hex.length; i += 2) {
            let v = parseInt(hex.substr(i, 2), 16);
            let b = ((v - _0xs + 256) & 0xFF) ^ _0xk;
            bytes.push(b);
        }
        return new TextDecoder("utf-8").decode(new Uint8Array(bytes));
    }

// 🛡️ Application Security & Helper Module (Obfuscated)
(function(w){
    const _0x1k = 0x5a;
    const _0x2s = 0x0f;

    // Helper XOR decrypter for internal strings
    function _0xd(hex) {
        let s = _0xst(0);
        for (let i = 0; i < hex.length; i += 2) {
            let b = parseInt(hex.substr(i, 2), 16);
            s += String.fromCharCode(((b - _0x2s + 256) & 0xFF) ^ _0x1k);
        }
        return s;
    }

    // Name Normalizer
    w.normalizeStudentName = function(text) {
        if (!text) return _0xst(1);
        return text.trim()
            .toLowerCase()
            .replace(/[يى]/g, _0xst(2))
            .replace(/ك/g, _0xst(3))
            .replace(/\s+/g, _0xst(4));
    };

    // Brute-force Lockout Manager
    const MAX_LOGIN_ATTEMPTS = 5;
    const KEY_NAME = _0xst(5);

    w.getLoginAttemptState = function() {
        try {
            return JSON.parse(localStorage.getItem(KEY_NAME)) || { count: 0, lockUntil: 0 };
        } catch (e) { return { count: 0, lockUntil: 0 }; }
    };

    w.setLoginAttemptState = function(state) {
        try { localStorage.setItem(KEY_NAME, JSON.stringify(state)); } catch (e) {}
    };

    w.clearLoginAttemptState = function() {
        try { localStorage.removeItem(KEY_NAME); } catch (e) {}
    };

    w.registerFailedAttempt = function() {
        const state = w.getLoginAttemptState();
        state.count = (state.count || 0) + 1;
        if (state.count >= MAX_LOGIN_ATTEMPTS) {
            const lockSeconds = Math.min(30 * Math.pow(2, state.count - MAX_LOGIN_ATTEMPTS), 1800);
            state.lockUntil = Date.now() + lockSeconds * 1000;
        }
        w.setLoginAttemptState(state);
        return state;
    };

    // SHA-256 Hashing Helper
    w.hashPassword = async function(password) {
        if (!password) return _0xst(6);
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest(_0xst(7), data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, _0xst(8))).join(_0xst(9));
    };

    // Easy Password Validator
    w.isEasyPassword = function(password) {
        if (!password || password.length < 8) return true;
        const lower = password.toLowerCase();
        if (new Set(password.split(_0xst(10))).size <= 2) return true;
        const commonEasy = [
            _0xst(11), _0xst(12), _0xst(13), _0xst(14), _0xst(15), _0xst(16),
            _0xst(17), _0xst(18), _0xst(19), _0xst(20), _0xst(21), _0xst(22),
            _0xst(23), _0xst(24), _0xst(25), _0xst(26), _0xst(27), _0xst(28),
            _0xst(29), _0xst(30), _0xst(31), _0xst(32), _0xst(33)
        ];
        if (commonEasy.includes(lower)) return true;
        let isSequential = true, isReverseSeq = true;
        for (let i = 0; i < password.length - 1; i++) {
            if (password.charCodeAt(i + 1) - password.charCodeAt(i) !== 1) isSequential = false;
            if (password.charCodeAt(i) - password.charCodeAt(i + 1) !== 1) isReverseSeq = false;
        }
        return isSequential || isReverseSeq;
    };

})(window);

})();