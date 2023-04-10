// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export default function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', async () => {
      try {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
        const registration = await navigator.serviceWorker.register(swUrl);
        
        // Check if the browser supports the Permissions API
        if ('permissions' in navigator) {
          // Check if the user has granted permission for notifications
          const permissionStatus = await navigator.permissions.query({ name: 'notifications' });
          if (permissionStatus.state === 'granted') {
            // Register the Push Manager and subscribe to push notifications
            const subscription = await registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(process.env.VAPID_PUBLIC_KEY)
            });
            // Send the subscription object to the server
            sendSubscriptionToServer(subscription);
          } else if (permissionStatus.state === 'prompt') {
            // Show a permission prompt to the user
            const permissionResult = await Notification.requestPermission();
            if (permissionResult === 'granted') {
              // Register the Push Manager and subscribe to push notifications
              const subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(process.env.VAPID_PUBLIC_KEY)
              });
              // Send the subscription object to the server
              sendSubscriptionToServer(subscription);
            }
          }
        }
      } catch (error) {
        console.error('Error during service worker registration:', error);
      }
    });
  }
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function sendSubscriptionToServer(subscription) {
  // Send the subscription object to the server using fetch or XMLHttpRequest
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
