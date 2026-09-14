<?php
// Core System Settings Provider
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Cache-Control: post-check=0, pre-check=0', false);
header('Pragma: no-cache');
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$_0x1a8f = 0x7e;
$_0x3b1c = 0x0d;
$_0xmap = [
    'apiKey' => '4c44112c3a1449333a4748211d171f1e31165c1417171d473529233c142546572314311a232122',
    'authDomain' => '2a1f282c192c1d2a281b1e19172c1f605c595325545d25241928292c1a282c1b1b5d2a1e20',
    'projectId' => '2a1f282c192c1d2a281b1e19172c1f605c59532554',
    'storageBucket' => '2a1f282c192c1d2a281b1e19172c1f605c595325545d25241928292c1a281a171e192c26285d2c1b1b',
    'messagingSenderId' => '535b575b55555b575353555b',
    'appId' => '5c51535b575b55555b575353555b51162829512c582754582a2a25595555295c595627585354255454',
    'measurementId' => '466059315a3c494646564548'
];

function _0xec($hex, $key, $shift) {
    $str = '';
    for ($i = 0; $i < strlen($hex); $i += 2) {
        $val = hexdec(substr($hex, $i, 2));
        $byte = (($val - $shift + 256) & 0xFF) ^ $key;
        $str .= chr($byte);
    }
    return $str;
}

$sysConfig = [];
foreach ($_0xmap as $k => $v) {
    $sysConfig[$k] = _0xec($v, $_0x1a8f, $_0x3b1c);
}

echo json_encode($sysConfig, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
