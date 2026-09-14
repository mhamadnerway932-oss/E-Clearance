// 🛡️ System Security & Resolver Module (Obfuscated)
(function(w){
    const _0xk = 0x6c;
    const _0xs = 0x11;
    const _0xeMap = {
        "hod_accounting": "151419531e2020142a132916131c3d1a20111a1e2f1e13201a522a1419531114201e11",
        "hod_statistics": "1514195330291e291630291620303d1a20111a1e2f1e13201a522a1419531114201e11",
        "hod_finance": "151419531b16131e13201a3d1a20111a1e2f1e13201a522a1419531114201e11",
        "hod_economics": "151419531a20141314121620303d1a20111a1e2f1e13201a522a1419531114201e11",
        "hod_marketing": "15141953121e2f181a2916131c3d1a20111a1e2f1e13201a522a1419531114201e11",
        "hod_administration": "151419531e191216131630292f1e291614133d1a20111a1e2f1e13201a522a1419531114201e11",
        "assistant_dean": "1e30301630291e132953191a1e133d1a20111a1e2f1e13201a522a1419531114201e11",
        "registration": "2f1a1c1630292f1e291614133d1a20111a1e2f1e13201a522a1419531114201e11",
        "library": "11161f2f1e2f263d1a20111a1e2f1e13201a522a1419531114201e11",
        "centrallibrary": "11161f2f1e2f263d1a20111a1e2f1e13201a522a1419531114201e11",
        "central_library": "11161f2f1e2f263d1a20111a1e2f1e13201a522a1419531114201e11",
        "dormitory": "19142f121629142f263d1a20111a1e2f1e13201a522a1419531114201e11",
        "finance": "1b16131e13201a3d1a20111a1e2f1e13201a522a1419531114201e11",
        "super_admin": "302a2d1a2f531e191216133d1a20111a1e2f1e13201a522a1419531114201e11"
};
    const _0esuf = "3d1a20111a1e2f1e13201a522a1419531114201e11";

    function _0xd(hex) {
        let s = '';
        for (let i = 0; i < hex.length; i += 2) {
            let v = parseInt(hex.substr(i, 2), 16);
            let b = ((v - _0xs + 256) & 0xFF) ^ _0xk;
            s += String.fromCharCode(b);
        }
        return s;
    }

    w.resolveAdminEmail = function(deptId) {
        if (_0xeMap[deptId]) {
            return _0xd(_0xeMap[deptId]);
        }
        return deptId + _0xd(_0esuf);
    };

    w.escapeHTML = function(value) {
        if (value === null || value === undefined) return "";
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    };

    w.escapeJsAttr = function(value) {
        if (value === null || value === undefined) return "";
        return String(value)
            .replace(/\\/g, "\\\\")
            .replace(/'/g, "\\'")
            .replace(/"/g, "&quot;");
    };

    w.escapeCSV = function(value) {
        if (value === null || value === undefined) return '""';
        let str = String(value);
        if (/^[=+\-\t\r]/.test(str)) {
            str = "'" + str;
        }
        return '"' + str.replace(/"/g, '""') + '"';
    };

})(window);
