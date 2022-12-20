# LaunchCharacter

Set a pending launch velocity on the Character. This velocity will be processed on the next CharacterMovementComponent tick,. and will set it to the "falling" state. Triggers the OnLaunched event.

Target is Character

## 图示

![]($-20221218-18154550.png)

## Inputs

In: Exec.

Target: Character Object Reference.

Launch Velocity: Vector. is the velocity to impart to the Character.

XYOverride: Boolean. if true replace the XY part of the Character's velocity instead of adding to it..

ZOverride: Boolean. if true replace the Z component of the Character's velocity instead of adding to it..  

## Outputs

Out: Exec.

