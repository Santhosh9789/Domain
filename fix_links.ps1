Get-ChildItem -Path "f:\vs code project\Domain-main" -Recurse -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $original = $content
    
    # Fix privacy-policy
    # Match href="some/path/privacy-policy" or href="some/path/privacy-policy/"
    # But NOT href="some/path/privacy-policy.html"
    $content = [regex]::Replace($content, 'href="([^"]*privacy-policy)(?!\.html)/?"', 'href="$1.html"')
    
    # Fix terms-conditions
    $content = [regex]::Replace($content, 'href="([^"]*terms-conditions)(?!\.html)/?"', 'href="$1.html"')

    if ($content -ne $original) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        Write-Host "Fixed links in: $($_.FullName)"
    }
}
