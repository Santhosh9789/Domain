$rootPath = "f:\vs code project\Domain-main"
$rootLength = $rootPath.Length

Get-ChildItem -Path $rootPath -Recurse -Filter *.html | ForEach-Object {
    $filePath = $_.FullName
    $content = Get-Content $filePath -Raw
    $original = $content
    
    # Calculate depth manually
    $relative = $filePath.Substring($rootLength).TrimStart([System.IO.Path]::DirectorySeparatorChar)
    if ($relative -eq "") {
        $depth = 0
    }
    else {
        $parts = $relative.Split([System.IO.Path]::DirectorySeparatorChar)
        $depth = $parts.Length - 1
    }
    
    $prefix = ""
    for ($i = 0; $i -lt $depth; $i++) {
        $prefix += "../"
    }
    
    # regex for privacy-policy and terms-conditions
    # Catch: /privacy-policy.html, ../privacy-policy.html, privacy-policy/, privacy-policy
    # Replacing with a relative path based on depth
    
    $privacyRegex = 'href="[^"]*privacy-policy[^"]*"'
    # We want to replace the whole href if it matches
    $content = [regex]::Replace($content, $privacyRegex, 'href="' + $prefix + 'privacy-policy.html"')
    
    $termsRegex = 'href="[^"]*terms-conditions[^"]*"'
    $content = [regex]::Replace($content, $termsRegex, 'href="' + $prefix + 'terms-conditions.html"')

    if ($content -ne $original) {
        Set-Content -Path $filePath -Value $content -NoNewline
        Write-Host "Updated links in: $relative (Depth: $depth, Prefix: $prefix)"
    }
}
