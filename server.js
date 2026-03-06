const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8000;

const rootDir = __dirname;

http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0]; // remove query strings
    
    // Normalize path to prevent directory traversal and handle root-relative links
    // If request is /privacy-policy.html, it should look in the rootDir
    let filePath = path.join(rootDir, reqUrl);

    // If it's a directory or missing extension, try index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
    } else if (!path.extname(filePath)) {
        // Handle clean URLs like /careers by checking /careers.html or /careers/index.html
        if (fs.existsSync(filePath + '.html')) {
            filePath += '.html';
        } else {
            filePath = path.join(filePath, 'index.html');
        }
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
                res.end('404 Not Found: ' + reqUrl);
                console.log(`404: ${reqUrl} -> ${filePath}`);
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
