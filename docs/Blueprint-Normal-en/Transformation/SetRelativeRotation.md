# SetRelativeRotation

Set the rotation of the component relative to its parent

Target is Scene Component

## 图示

![]($-20221218-21153928.png)

## Inputs

In: Exec.

Target: Scene Component Object Reference.

New Rotation: Rotator. New rotation of the component relative to its parent.

Sweep: Boolean. Whether we sweep to the destination (currently not supported for rotation)..

Teleport: Boolean. Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts)..  

## Outputs

Out: Exec.

Sweep Hit Result: Hit Result Structure. Hit result from any impact if sweep is true..

