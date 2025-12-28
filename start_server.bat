
@echo off
echo Starting Blueidealteck Local Server...
echo Open your browser to: http://localhost:8000
python -m http.server 8000 --bind 127.0.0.1
pause
