$port = 8000
$path = "f:\vs code project\Domain-main (3)\Domain-main"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Write-Host "BlueIdealTeck Server running on http://localhost:$port/"
Write-Host "Press Ctrl+C to stop."

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $reqPath = $request.Url.LocalPath
        if ($reqPath -eq "/") { $reqPath = "/index.html" }
        
        $filePath = Join-Path $path $reqPath
        $filePath = $filePath.TrimEnd('\').TrimEnd('/')
        
        if (Test-Path $filePath -PathType Container) {
            $filePath = Join-Path $filePath "index.html"
        }
        
        if (Test-Path $filePath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            
            if ($filePath -match '\.html$') { $response.ContentType = "text/html; charset=utf-8" }
            elseif ($filePath -match '\.css$') { $response.ContentType = "text/css" }
            elseif ($filePath -match '\.js$') { $response.ContentType = "application/javascript" }
            elseif ($filePath -match '\.png$') { $response.ContentType = "image/png" }
            elseif ($filePath -match '\.jpg$|\.jpeg$') { $response.ContentType = "image/jpeg" }
            elseif ($filePath -match '\.svg$') { $response.ContentType = "image/svg+xml" }
            elseif ($filePath -match '\.woff2$') { $response.ContentType = "font/woff2" }
            elseif ($filePath -match '\.woff$') { $response.ContentType = "font/woff" }
            elseif ($filePath -match '\.ico$') { $response.ContentType = "image/x-icon" }
            elseif ($filePath -match '\.xml$') { $response.ContentType = "application/xml" }
            elseif ($filePath -match '\.txt$') { $response.ContentType = "text/plain" }
            else { $response.ContentType = "application/octet-stream" }
            
            $response.Headers.Add("Cache-Control", "no-cache")
            $response.OutputStream.Write($content, 0, $content.Length)
        }
        else {
            $response.StatusCode = 404
        }
        $response.Close()
    }
}
finally {
    $listener.Stop()
}
