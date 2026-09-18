(function(w){
    w.normalizeStudentName = function(text) {
        if (!text) return "";
        return text.trim()
            .toLowerCase()
            .replace(/[يى]/g, 'ی')
            .replace(/ك/g, 'ک')
            .replace(/\s+/g, ' ');
    };

    const MAX_LOGIN_ATTEMPTS = 5;
    w.MAX_LOGIN_ATTEMPTS = MAX_LOGIN_ATTEMPTS;
    const KEY_NAME = "student_login_attempts";

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

    w.hashPassword = async function(password) {
        if (!password) return "";
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    };

    w.isEasyPassword = function(password) {
        if (!password || password.length < 8) return true;
        const lower = password.toLowerCase();
        if (new Set(password.split('')).size <= 2) return true;
        const commonEasy = [
            "12345678", "123456789", "87654321", "00000000", "11111111", "22222222",
            "33333333", "44444444", "55555555", "66666666", "77777777", "88888888",
            "99999999", "12341234", "11223344", "12121212", "password", "qwertyui",
            "asdfghjkl", "1234567890", "0123456789", "123321123", "77889900"
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
