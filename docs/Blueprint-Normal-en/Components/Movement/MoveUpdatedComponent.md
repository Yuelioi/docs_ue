# MoveUpdatedComponent

Moves our UpdatedComponent by the given Delta, and sets rotation to NewRotation.. Respects the plane constraint, if enabled.

Target is Movement Component

## 图示

![]($-20221218-18250063.png)

## Inputs

In: Exec.

Target: Movement Component Object Reference.

Delta: Vector.

New Rotation: Rotator.

Sweep: Boolean.

Teleport: Boolean.  

## Outputs

Out: Exec.

Out Hit: Hit Result Structure.

Return Value: Boolean. True if some movement occurred, false if no movement occurred. Result of any impact will be stored in OutHit..

