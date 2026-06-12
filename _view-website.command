#!/bin/bash
#
#  Engine for viewing the Redwood Bay Press website locally.
#  (You normally start this with the "Redwood Bay Press" app, not directly.)
#

SITE="/Users/manzanito25/Desktop/CLAUDE ONLY/Business Dashboard Files/Website/Publishing House Website"
NODE="$HOME/.local/node/bin/node"
LOG="$HOME/Desktop/RedwoodBayPress-log.txt"

{
  echo "=== started $(date) ==="
  echo "site: $SITE"
  echo "node exists: $([ -x "$NODE" ] && echo yes || echo NO)"
} > "$LOG" 2>&1

# Free any previous copy still holding the port.
lsof -tiTCP:4321 -sTCP:LISTEN 2>/dev/null | xargs kill 2>/dev/null

cd "$SITE" || { echo "Could not find the website folder." | tee -a "$LOG"; echo "Press any key to close."; read -n 1; exit 1; }

clear
echo ""
echo "  ============================================"
echo "    Redwood Bay Press  —  starting your site"
echo "  ============================================"
echo ""
echo "    Please wait a few seconds..."
echo "    Your browser will open automatically to:"
echo ""
echo "        http://localhost:4321"
echo ""
echo "    (Your browser may show a small 'Not Secure' label"
echo "    in the address bar. That is normal and fine for a"
echo "    site running on your own computer.)"
echo ""
echo "    ▶ To STOP the site: just close this window."
echo ""
echo "  --------------------------------------------"
echo ""

# Open the browser once the server has had a moment to start.
( sleep 6; open "http://localhost:4321" ) &

# Start the site (keeps running until you close the window). Tee output to the log.
"$NODE" "node_modules/astro/astro.js" dev 2>&1 | tee -a "$LOG"
