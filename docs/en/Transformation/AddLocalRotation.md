# AddLocalRotation

Adds a delta to the rotation of the component in its local reference frame

Target is Scene Component

## 图示

![]($-20221218-21143098.png)

## Inputs

In: Exec.

Target: Scene Component Object Reference.

Delta Rotation: Rotator. Change in rotation of the component in its local reference frame..

Sweep: Boolean. Whether we sweep to the destination (currently not supported for rotation)..

Teleport: Boolean. Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts)..  

## Outputs

Out: Exec.

Sweep Hit Result: Hit Result Structure. Hit result from any impact if sweep is true..

