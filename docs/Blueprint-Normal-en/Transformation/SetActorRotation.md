# SetActorRotation

Set the Actor's rotation instantly to the specified rotation.

Target is Actor

## 图示

![]($-20221218-21153221.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

New Rotation: Rotator. The new rotation for the Actor..

Teleport Physics: Boolean. Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts)..  

## Outputs

Out: Exec.

Return Value: Boolean. Whether the rotation was successfully set..

