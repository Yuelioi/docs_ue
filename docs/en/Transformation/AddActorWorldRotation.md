# AddActorWorldRotation

Adds a delta to the rotation of this actor in world space.

Target is Actor

## 图示

![]($-20221218-21142647.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

Delta Rotation: Rotator. The change in rotation..

Sweep: Boolean. Whether to sweep to the target rotation (not currently supported for rotation)..

Teleport: Boolean. Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts). If CCD is on and not teleporting, this will affect objects along the entire swept volume..  

## Outputs

Out: Exec.

Sweep Hit Result: Hit Result Structure. The hit result from the move if swept..

