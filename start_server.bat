@echo off
echo Cleaning up existing server on port 8000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :8000') do taskkill /F /PID %%a 2>nul

echo Starting Localhost Server...
echo Visit: http://localhost:8000

REM Open the browser
start http://localhost:8000

REM Try Python Launcher
py server.py
if %ERRORLEVEL% EQU 0 goto end

REM Fallback to python command
python server.py
if %ERRORLEVEL% EQU 0 goto end

echo.
echo ERROR: Failed to start server.
echo Try disabling 'Python App Execution Aliases' in Windows Settings.
pause

:end
