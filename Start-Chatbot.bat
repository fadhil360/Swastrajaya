 @echo off
title AI Chatbot Launcher

echo ====================================
echo       Starting AI Chatbot
echo ====================================
echo.

:: Start Pocket TTS
echo Starting Pocket TTS...
start "Pocket TTS API" cmd /k "uvx pocket-tts serve --config ""hf://anak10thn/pocket-tts-indonesian/indonesian_6l.yaml@6196fe14c6c2108332c16d33c864c8901c044aaa"" --default-voice ""C:\Users\undea\Desktop\Lomba\Chatbot\Sample.wav"" --host 127.0.0.1 --port 8000"

:: Wait for Pocket TTS to initialize
timeout /t 10 /nobreak >nul

:: Start Vite
echo Starting Vite...
start "Vite Chatbot" cmd /k "cd /d C:\Users\undea\Desktop\Lomba\Chatbot && npx vite --host 0.0.0.0"

:: Wait for Vite to initialize
timeout /t 5 /nobreak >nul

:: Start Cloudflare Tunnel
echo Starting Cloudflare Tunnel...
start "MindAR Cloudflare Tunnel" cmd /k "cloudflared tunnel --url http://localhost:5173"

:: Open chatbot locally
timeout /t 3 /nobreak >nul
start http://127.0.0.1:5173

echo.
echo ====================================
echo       Chatbot startup complete!
echo ====================================
echo.
echo Pocket TTS: http://127.0.0.1:8000
echo Vite:       http://127.0.0.1:5173
echo Cloudflare: Check the Tunnel window
echo.
pause