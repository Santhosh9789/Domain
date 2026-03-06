$port = 8000
$root = "f:\vs code project\Domain-main"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
try {
    $listener.Start()
    Write-Host "Server successfully running at http://localhost:$port/"
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        $url = $request.Url.LocalPath
        if ($url -eq "/") { $url = "/index.html" }
        
        # Handle directory listing or index.html fallback
        $filePath = Join-Path $root $url.TrimStart('/')
        if (Test-Path $filePath -PathType Container) {
            $filePath = Join-Path $filePath "index.html"
        }

        if (Test-Path $filePath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mimeTypes = @{
                ".html" = "text/html"
                ".js"   = "text/javascript"
                ".css"  = "text/css"
                ".png"  = "image/png"
                ".jpg"  = "image/jpeg"
                ".jpeg" = "image/jpeg"
                ".svg"  = "image/svg+xml"
                ".json" = "application/json"
                ".ico"  = "image/x-icon"
            }
            if ($mimeTypes.ContainsKey($ext)) { 
                $response.ContentType = $mimeTypes[$ext] 
            } else {
                $response.ContentType = "application/octet-stream"
            }
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found - Path: $url")
            $response.OutputStream.Write($msg, 0, $msg.Length)
            Write-Host "404: $url"
        }
        $response.Close()
    }
} catch {
    Write-Error $_.Exception.Message
} finally {
    if ($listener.IsListening) { $listener.Stop() }
}
