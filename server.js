const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8000;

http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0]; // remove query strings
    let filePath = '.' + reqUrl;
    if (filePath === './') filePath = './index.html';
    
    // Serve directory indexes
    if (!path.extname(filePath) && !filePath.endsWith('index.html')) {
        filePath = path.join(filePath, 'index.html');
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
        '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpg',
        '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml',
        '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
        '.ico': 'image/x-icon'
    };

    let contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code == 'ENOENT'){
                res.writeHead(404);
                res.end('404 Not Found');
            } else {
                res.writeHead(500);
                res.end('500 Server Error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-cache' });
            res.end(content, 'utf-8');
        }
    });

}).listen(port, () => {
    console.log(`Server successfully running at http://localhost:${port}/`);
});
