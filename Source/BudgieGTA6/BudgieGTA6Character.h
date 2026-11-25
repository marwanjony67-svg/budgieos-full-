#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "BudgieGTA6Character.generated.h"

class USpringArmComponent;
class UCameraComponent;

UCLASS()
class BUDGIEGTA6_API ABudgieGTA6Character : public ACharacter
{
    GENERATED_BODY()

public:
    ABudgieGTA6Character();

protected:
    virtual void SetupPlayerInputComponent(UInputComponent* PlayerInputComponent) override;
    void MoveForward(float Value);
    void MoveRight(float Value);

private:
    UPROPERTY(VisibleAnywhere, Category="Camera")
    TObjectPtr<USpringArmComponent> CameraBoom;

    UPROPERTY(VisibleAnywhere, Category="Camera")
    TObjectPtr<UCameraComponent> FollowCamera;
};
