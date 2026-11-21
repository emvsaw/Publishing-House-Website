#!/bin/bash

# Double-click this file to view the Redwood Bay Press website locally.
SITE="$(cd "$(dirname "$0")" && pwd)"
cd "$SITE" || exit 1

export PATH="$HOME/.local/node/bin:/opt/homebrew/bin:/usr/local/bin:$PATH"
URL="http://127.0.0.1:4321/"

if ! command -v npm >/dev/null 2>&1; then
  echo "Node.js is missing. Please install it, then try again."
  read -r -p "Press Return to close."
  exit 1
fi

if curl -fsS "$URL" >/dev/null 2>&1; then
  open "$URL"
  echo "The website is already running. Opened it in your browser."
  read -r -p "Press Return to close."
  exit 0
fi

echo "Starting Redwood Bay Press..."
echo "Your browser will open at $URL"
echo "Close this window when you want to stop the local website."

(
  for i in {1..30}; do
    if curl -fsS "$URL" >/dev/null 2>&1; then
      open "$URL"
      exit 0
    fi
    sleep 1
  done
  echo "The website did not start. Check the message in this window."
) &

npm run dev -- --host 127.0.0.1
wait
