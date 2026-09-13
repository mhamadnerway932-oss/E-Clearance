<?php
// Prevent unauthorized caching
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Cache-Control: post-check=0, pre-check=0', false);
header('Pragma: no-cache');

// Set JSON content type & CORS
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

/**
 * Helper function to parse .env file into environment
 */
function loadEnv($path) {
    if (!file_exists($path)) return;
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        if (empty($line) || strpos($line, '#') === 0) continue;
        if (strpos($line, '=') !== false) {
            list($key, $value) = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value, "\" '");
            if (!array_key_exists($key, $_ENV)) {
                $_ENV[$key] = $value;
                putenv("$key=$value");
            }
        }
    }
}

// Load environment variables from .env
loadEnv(__DIR__ . '/.env');

$firebaseConfig = [
    "apiKey" => getenv('FIREBASE_API_KEY') ?: ($_ENV['FIREBASE_API_KEY'] ?? ''),
    "authDomain" => getenv('FIREBASE_AUTH_DOMAIN') ?: ($_ENV['FIREBASE_AUTH_DOMAIN'] ?? ''),
    "projectId" => getenv('FIREBASE_PROJECT_ID') ?: ($_ENV['FIREBASE_PROJECT_ID'] ?? ''),
    "storageBucket" => getenv('FIREBASE_STORAGE_BUCKET') ?: ($_ENV['FIREBASE_STORAGE_BUCKET'] ?? ''),
    "messagingSenderId" => getenv('FIREBASE_MESSAGING_SENDER_ID') ?: ($_ENV['FIREBASE_MESSAGING_SENDER_ID'] ?? ''),
    "appId" => getenv('FIREBASE_APP_ID') ?: ($_ENV['FIREBASE_APP_ID'] ?? ''),
    "measurementId" => getenv('FIREBASE_MEASUREMENT_ID') ?: ($_ENV['FIREBASE_MEASUREMENT_ID'] ?? '')
];

echo json_encode($firebaseConfig, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
