# DeprojectScreentoWorld

Transforms the given 2D screen space coordinate into a 3D world-space point and direction.

Target is Gameplay Statics

## 图示

![]($-20221218-18130513.png)

## Inputs

Player: Player Controller Object Reference. Deproject using this player's view..

Screen Position: Vector 2D Structure (by ref). 2D screen space to deproject..  

## Outputs

World Position: Vector. (out) Corresponding 3D position in world space..

World Direction: Vector. (out) World space direction vector away from the camera at the given 2d point..

Return Value: Boolean.

