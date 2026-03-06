$rootPath = "f:\vs code project\Domain-main"

Get-ChildItem -Path $rootPath -Recurse -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $original = $content
    
    # Replace "Virudhachalam (Office)" with "Remote"
    $content = $content -replace "Virudhachalam \(Office\)", "Remote"
    
    if ($content -ne $original) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        Write-Host "Updated location in: $($_.FullName)"
    }
}
