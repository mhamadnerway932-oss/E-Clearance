<?php
// Core System Settings Provider - Backend Environment Loader
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

function loadEnvFile($path) {
    $env = [];
    if (file_exists($path) && is_readable($path)) {
        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $line = trim($line);
            if ($line === '' || strpos($line, '#') === 0) {
                continue;
            }
            if (strpos($line, '=') !== false) {
                list($name, $value) = explode('=', $line, 2);
                $name = trim($name);
                $value = trim($value);
                if ((substr($value, 0, 1) === '"' && substr($value, -1) === '"') ||
                    (substr($value, 0, 1) === "'" && substr($value, -1) === "'")) {
                    $value = substr($value, 1, -1);
                }
                $env[$name] = $value;
            }
        }
    }
    return $env;
}

$envLocal = loadEnvFile(__DIR__ . '/.env.local');
$envStd   = loadEnvFile(__DIR__ . '/.env');

function getEnvVar($key, $default, $envLocal, $envStd) {
    $val = getenv($key);
    if ($val !== false && $val !== '') return $val;
    if (isset($_ENV[$key]) && $_ENV[$key] !== '') return $_ENV[$key];
    if (isset($_SERVER[$key]) && $_SERVER[$key] !== '') return $_SERVER[$key];
    if (isset($envLocal[$key]) && $envLocal[$key] !== '') return $envLocal[$key];
    if (isset($envStd[$key]) && $envStd[$key] !== '') return $envStd[$key];
    return $default;
}

$sysConfig = [
    'apiKey'            => getEnvVar('FIREBASE_API_KEY', 'AIzaSyBXSDEjntloZw1yttnDVbhQyfG4hyZshjk', $envLocal, $envStd),
    'authDomain'        => getEnvVar('FIREBASE_AUTH_DOMAIN', 'clearanceportal-128f9.firebaseapp.com', $envLocal, $envStd),
    'projectId'         => getEnvVar('FIREBASE_PROJECT_ID', 'clearanceportal-128f9', $envLocal, $envStd),
    'storageBucket'     => getEnvVar('FIREBASE_STORAGE_BUCKET', 'clearanceportal-128f9.firebasestorage.app', $envLocal, $envStd),
    'messagingSenderId' => getEnvVar('FIREBASE_MESSAGING_SENDER_ID', '804066048860', $envLocal, $envStd),
    'appId'             => getEnvVar('FIREBASE_APP_ID', '1:804066048860:web:a5d95ccf266b127d589f99', $envLocal, $envStd),
    'measurementId'     => getEnvVar('FIREBASE_MEASUREMENT_ID', 'G-2Z3QBGG7FE', $envLocal, $envStd)
];

echo json_encode($sysConfig, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
