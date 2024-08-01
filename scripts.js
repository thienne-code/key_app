document.getElementById('generateKey').addEventListener('click', function() {
    // Generate a random key
    const key = generateRandomKey();
    // Display the key
    document.getElementById('keyDisplay').innerText = key;
});

function generateRandomKey() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        key += chars[randomIndex];
    }
    return key;
}
