
@echo off
title Pocket TTS + Cloudflare Tunnel

echo ====================================
echo    Starting Pocket TTS + Tunnel
echo ====================================
echo.

:: Start Pocket TTS
echo [1/3] Starting Pocket TTS API...

start "Pocket TTS API" cmd /k "uvx pocket-tts serve --config ""hf://anak10thn/pocket-tts-indonesian/indonesian_6l.yaml@6196fe14c6c2108332c16d33c864c8901c044aaa"" --default-voice ""C:\Users\undea\Desktop\Lomba\Swastrajaya\Sample.wav"" --host 127.0.0.1 --port 8000"

:: Wait for Pocket TTS
echo Waiting for Pocket TTS to initialize...
timeout /t 15 /nobreak >nul

:: Start Cloudflare Tunnel
echo [2/3] Starting Cloudflare Tunnel...

start "Pocket TTS Tunnel" cmd /k "cloudflared tunnel --url http://127.0.0.1:8000"

echo.
echo [3/3] Startup commands completed.
echo.
echo ====================================
echo Local API: http://127.0.0.1:8000
echo Public API: Check Pocket TTS Tunnel window
echo ====================================
echo.
echo Copy the trycloudflare.com URL from the tunnel window.
echo.
pause
