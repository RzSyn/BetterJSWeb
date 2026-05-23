const fs = require('fs');
const path = require('path');

const files = ['index.html', 'data.js', 'app.js', 'style.css'];

console.log("=== SEARCHING FOR 'ย.อ.' OCCURRENCES ===");
files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        lines.forEach((line, index) => {
            if (line.includes('ย.อ.')) {
                console.log(`${file}:${index + 1}: ${line.trim()}`);
            }
        });
    }
});

console.log("\n=== SEARCHING FOR '435 ไร่' (OLD CAMPUS SIZE) ===");
files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        lines.forEach((line, index) => {
            if (line.includes('435')) {
                console.log(`${file}:${index + 1}: ${line.trim()}`);
            }
        });
    }
});
