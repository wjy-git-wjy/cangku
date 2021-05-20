let fs = require('fs');

for (let i = 1; i <= 20; i++) {
    str = './modules/' + i + '.js'
    fs.appendFileSync(str)
}