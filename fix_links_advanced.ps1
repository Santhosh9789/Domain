$rootPath = "f:\vs code project\Domain-main"
Get-ChildItem -Path $rootPath -Recurse -Filter *.html | ForEach-Object {
    $filePath = $_.FullName
    $content = Get-Content $filePath -Raw
    $original = $content
    
    # Calculate depth
    $relativePath = Resolve-Path $_.FullName -Relative -RelativeTo $rootPath
    # Remove leading .\
    $relativePath = $relativePath.TrimStart(".\")
    $parts = $relativePath.Split([System.IO.Path]::DirectorySeparatorChar)
    $depth = $parts.Length - 1
    
    $prefix = ""
    for ($i = 0; $i -lt $depth; $i++) {
        $prefix += "../"
    }
    
    # Fix privacy-policy
    # Match href="/privacy-policy.html", href="../privacy-policy.html", href="privacy-policy/", href="privacy-policy"
    $content = [regex]::Replace($content, 'href="([^"]*privacy-policy)(?:\.html)?/?"', 'href="' + $prefix + 'privacy-policy.html"')
    
    # Fix terms-conditions
    $content = [regex]::Replace($content, 'href="([^"]*terms-conditions)(?!\.html)/?"', 'href="' + $prefix + 'terms-conditions.html"')
    # Catch already fixed terms-conditions.html to make it relative
    $content = [regex]::Replace($content, 'href="[^"]*terms-conditions\.html"', 'href="' + $prefix + 'terms-conditions.html"')

    # Fix Careers if it's broken
    # But be careful: careers is a folder.
    # $content = [regex]::Replace($content, 'href="[^"]*careers/?(?!\.html)"', 'href="' + $prefix + 'careers/"')

    if ($content -ne $original) {
        Set-Content -Path $filePath -Value $content -NoNewline
        Write-Host "Updated links in: $relativePath (Depth: $depth, Prefix: $prefix)"
    }
}
