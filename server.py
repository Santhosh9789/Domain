import http.server
import socketserver
import os

PORT = 8000

class CleanUrlHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # If the path is a directory, let standard handler deal with it (index.html)
        if self.path.endswith('/'):
             return super().do_GET()
        
        # Check if the path exists as is
        path = self.translate_path(self.path)
        if os.path.exists(path):
            return super().do_GET()
            
        # Try finding the file with .html extension
        if os.path.exists(path + ".html"):
            self.path += ".html"
            return super().do_GET()
            
        # Fallback to standard 404 behavior
        return super().do_GET()

# Allow reuse of address to prevent "Address already in use" errors on quick restarts
socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer(("", PORT), CleanUrlHandler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    print("Clean URLs enabled (mapping /page to /page.html)")
    print("Press Ctrl+C to stop.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    print("\nServer stopped.")
