# SetActorRelativeRotation

Set the actor's RootComponent to the specified relative rotation

Target is Actor

## 图示

![]($-20221218-21152889.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

New Relative Rotation: Rotator. New relative rotation of the actor's root component.

Sweep: Boolean. Whether we sweep to the destination location, triggering overlaps along the way and stopping short of the target if blocked by something. Only the root component is swept and checked for blocking collision, child components move without sweeping. If collision is off, this has no effect..

Teleport: Boolean. Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts). If CCD is on and not teleporting, this will affect objects along the entire swept volume..  

## Outputs

Out: Exec.

Sweep Hit Result: Hit Result Structure.

