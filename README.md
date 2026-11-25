# BudgieGTA6 — BudgieOS Open-World Starter

An original Unreal Engine 5 C++ open-world driving and exploration game for Windows PC. This is a starter foundation, not Rockstar's GTA 6 and not a copy of its code, characters, map, missions, or assets.

## Included
- C++ Unreal Engine game module and game mode
- Third-person character with camera
- Basic movement, look, and jump input
- Windows development/build notes
- No third-party or copyrighted game assets

## Requirements
- Unreal Engine 5 installed through the Epic Games Launcher
- Visual Studio 2022 with the **Game development with C++** workload
- Windows 10/11 64-bit

## Open and build
1. In Unreal Engine's Project Browser, create **Games → Blank → C++** named `BudgieGTA6`.
2. Close the editor and copy this repository's `Source/BudgieGTA6` and `Config` folders into the generated project folder.
3. Replace generated module files with the matching files from this repository.
4. Right-click `BudgieGTA6.uproject` and choose **Generate Visual Studio project files**.
5. Open the solution, select **Development Editor / Win64**, and build.
6. Open the project in Unreal Editor and press Play.

The editor generates local project metadata and assets. This repository does not contain a compiled `.exe`. Package a Windows build from Unreal Editor after adding and testing your map and assets.

## Controls
- WASD: move
- Mouse: look
- Space: jump

## Roadmap
- Original coastal city map and districts
- Drivable vehicles and traffic
- Exploration and delivery challenges
- Save/load and settings menu
- Graphics presets and FPS display

## Assets and licensing
Use original or properly licensed art, audio, names, and other assets. Do not include proprietary GTA/Rockstar files or present this as an official Rockstar product.
