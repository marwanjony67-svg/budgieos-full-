@echo off
setlocal

if "%UE_ENGINE_ROOT%"=="" (
  echo Set UE_ENGINE_ROOT to your Unreal Engine folder first.
  echo Example: set UE_ENGINE_ROOT=C:\Program Files\Epic Games\UE_5.4
  exit /b 1
)

if not exist "%UE_ENGINE_ROOT%\Engine\Build\BatchFiles\Build.bat" (
  echo Unreal Engine Build.bat was not found under UE_ENGINE_ROOT.
  exit /b 1
)

call "%UE_ENGINE_ROOT%\Engine\Build\BatchFiles\Build.bat" BudgieGTA6Editor Win64 Development "%~dp0BudgieGTA6.uproject" -WaitMutex
if errorlevel 1 exit /b %errorlevel%

call "%UE_ENGINE_ROOT%\Engine\Build\BatchFiles\RunUAT.bat" BuildCookRun -project="%~dp0BudgieGTA6.uproject" -noP4 -platform=Win64 -clientconfig=Development -build -cook -stage -pak -archive -archivedirectory="%~dp0Build\Windows"
exit /b %errorlevel%
