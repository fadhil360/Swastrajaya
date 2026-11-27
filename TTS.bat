@echo off
title Pocket TTS + Cloudflare Tunnel

echo ====================================
echo    Starting Pocket TTS + Tunnel
echo ====================================
echo.

:: Start Pocket TTS
echo [1/3] Starting Pocket TTS API...

start "Pocket TTS API" cmd /k "uvx pocket-tts serve --config ""hf://anak10thn/pocket-tts-indonesian/indonesian_6l.yaml@6196fe14c6c2108332c16d33c864c8901c044aaa"" --default-voice ""C:\Users\undea\Desktop\Lomba\Swastrajaya\Sample.wav"" --host 127.0.0.1 --port 8000"
