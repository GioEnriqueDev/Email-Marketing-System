@echo off
title 🚀 EMAIL SYSTEM 🚀
color 2
cls

echo.
echo ================================================
echo    🚀 EMAIL SYSTEM 🚀
echo ================================================
echo.
echo ⚡ STARTING...
echo.

:: Go to root directory (parent of scripts)
cd /d "%~dp0.."

:: Check Node.js
echo 🔍 Checking Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ ERROR: Node.js is not installed!
    echo    Please install Node.js.
    pause
    exit /b 1
)
echo ✅ Node.js found!

:: Kill existing processes
echo 🧹 Cleaning up previous processes...
taskkill /F /IM node.exe >nul 2>&1

:: Install dependencies if needed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install >nul 2>&1
    if errorlevel 1 (
        echo ❌ ERROR installing dependencies!
        pause
        exit /b 1
    )
)

echo.
echo ================================================
echo    🚀 STARTING SERVER...
echo ================================================
echo.

:: Start Server
echo 🚀 Starting Node.js server...
start "Email System Server" cmd /k "node src/server.js"

:: Wait for server
echo ⏳ Waiting for server to start...
timeout /t 5 /nobreak >nul

:: Check connection
:test_connection
echo 🔍 Testing connection...
curl -s -f http://localhost:3000/status >nul 2>&1
if not errorlevel 1 goto server_is_ready

echo ⏳ Still waiting...
timeout /t 3 /nobreak >nul
goto test_connection

:server_is_ready
echo.
echo ✅ SERVER ACTIVE AND RUNNING!
echo.

:: Open Browser
echo 🌐 Opening Email Editor...
start http://localhost:3000

echo.
echo ================================================
echo    ✅ SYSTEM READY!
echo ================================================
echo.
echo 💻 The email editor is open in your browser
echo    URL: http://localhost:3000
echo.
echo ⚠️  IMPORTANT: 
echo    - DO NOT CLOSE THIS WINDOW!
echo    - The server must remain active
echo.

:: Monitor Loop
:monitor_loop
timeout /t 60 /nobreak >nul
echo [%time%] 🔄 System active...

:: Check if server is still up
curl -s -f http://localhost:3000/status >nul 2>&1
if errorlevel 1 (
    echo.
    echo ⚠️  WARNING: Server disconnected!
    echo    Restarting...
    goto restart_server
)
goto monitor_loop

:restart_server
echo 🔄 Restarting server...
taskkill /F /IM node.exe >nul 2>&1
start "Email System Server" cmd /k "node src/server.js"
timeout /t 10 /nobreak >nul
goto monitor_loop
