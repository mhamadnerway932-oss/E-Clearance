// UoD E-Clearance Service Worker for Lockscreen & Background Notifications
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Handle Notification Click (Focus or open dashboard)
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (const client of clientList) {
                if (client.url.includes('dashboard.html') && 'focus' in client) {
                    return client.focus();
                }
            }
            if (self.clients.openWindow) {
                return self.clients.openWindow('./dashboard.html');
            }
        })
    );
});

// Listen for push notifications from push service
self.addEventListener('push', (event) => {
    let payload = { title: 'E-Clearance Update', body: 'تێنینی یان واژۆیەکا نووی هاتیە لێدان.' };
    if (event.data) {
        try { payload = event.data.json(); } catch (e) { payload.body = event.data.text(); }
    }
    event.waitUntil(
        self.registration.showNotification(payload.title || 'E-Clearance Update', {
            body: payload.body || 'داخوازیا تە هاتە نووکرن.',
            icon: payload.icon || 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
            badge: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
            vibrate: [200, 100, 200, 100, 300],
            tag: 'clearance-push-' + Date.now(),
            renotify: true,
            requireInteraction: true,
            data: { url: './dashboard.html' }
        })
    );
});

// Listen for background messages from application thread
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const { title, body, icon, tag } = event.data;
        self.registration.showNotification(title, {
            body: body,
            icon: icon || 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
            badge: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
            vibrate: [200, 100, 200, 100, 300],
            tag: tag || 'clearance-notice',
            renotify: true,
            requireInteraction: true,
            data: { url: './dashboard.html' }
        });
    }
});
