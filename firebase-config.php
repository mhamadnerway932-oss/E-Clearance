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

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$firebaseConfig = [
    "apiKey" => base64_decode("QUl6YVN5QlhTREVqbnRsb1p3MXl0dG5EVmJoUXlmRzRoeVpzaGpr"),
    "authDomain" => base64_decode("Y2xlYXJhbmNlcG9ydGFsLTEyOGY5LmZpcmViYXNlYXBwLmNvbQ=="),
    "projectId" => base64_decode("Y2xlYXJhbmNlcG9ydGFsLTEyOGY5"),
    "storageBucket" => base64_decode("Y2xlYXJhbmNlcG9ydGFsLTEyOGY5LmZpcmViYXNldG9yYWdlLmFwcA=="),
    "messagingSenderId" => base64_decode("ODA0MDY2MDQ4ODYw"),
    "appId" => base64_decode("MTo4MDQwNjYwNDg4NjA6d2ViOmE1ZDk1Y2NmMjY2YjEyN2Q1ODlmOTk="),
    "measurementId" => base64_decode("Ry0yWjNRQkdHN0ZF")
];

echo json_encode($firebaseConfig, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
