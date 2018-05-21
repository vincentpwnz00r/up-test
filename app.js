const http = require('http')
const { PORT = 3000 } = process.env

http.createServer((req, res) => {
count++;	 
 res.end('Count is  ${count}.\n')
}).listen(PORT)

