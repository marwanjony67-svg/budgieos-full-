# BudgieOS Mac Edition

An original desktop UI prototype inspired by the clean layout of modern desktop operating systems. This is **not Apple macOS**, does not contain Apple's proprietary code or assets, and does not install or boot as a real operating system.

## Features
- Desktop wallpaper, menu bar, and app dock
- Draggable-style app windows (click the title bar controls to close)
- Finder-inspired file browser with sample files
- Terminal-style demo (commands are simulated; no shell commands execute)
- Settings panel and live clock
- Responsive layout

## Run
Open `index.html` in a modern browser. No build tools or dependencies required.

## Project structure
- `index.html` — desktop markup
- `style.css` — visual theme and responsive layout
- `app.js` — clock, app windows, and simulated terminal

## Roadmap
1. Add keyboard shortcuts and window focus management.
2. Add a real file-browser backend only with explicit user permissions.
3. Package as a desktop app with Tauri or Electron.
4. Explore a Linux-based BudgieOS distribution separately if a bootable OS is desired.

## License
MIT for this original project code. Product names and trademarks belong to their respective owners.
