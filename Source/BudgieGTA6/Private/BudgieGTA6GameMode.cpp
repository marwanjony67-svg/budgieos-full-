#include "BudgieGTA6GameMode.h"
#include "GameFramework/DefaultPawn.h"

ABudgieGTA6GameMode::ABudgieGTA6GameMode()
{
    // A simple flying pawn keeps the first prototype focused on exploration.
    // Replace this with an original third-person character and drivable vehicle
    // once those assets and input mappings are added.
    DefaultPawnClass = ADefaultPawn::StaticClass();
}