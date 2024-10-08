const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateCircleArea() {
    rl.question('Yarıçapı girin: ', (radius) => {
    const r = parseFloat(radius);
    const area = Math.PI * r * r;
    console.log(`Dairenin alanı: ${area.toFixed(2)}`);
    rl.close();
    });
}

calculateCircleArea();