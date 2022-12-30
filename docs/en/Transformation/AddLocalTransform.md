# AddLocalTransform

Adds a delta to the transform of the component in its local reference frame. Scale is unchanged.

Target is Scene Component

## 图示

![]($-20221218-21143211.png)

## Inputs

In: Exec.

Target: Scene Component Object Reference.

Delta Transform: Transform (by ref). Change in transform of the component in its local reference frame. Scale is unchanged..

Sweep: Boolean. Whether we sweep to the destination location, triggering overlaps along the way and stopping short of the target if blocked by something. Only the root component is swept and checked for blocking collision, child components move without sweeping. If collision is off, this has no effect..

Teleport: Boolean. Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts). If CCD is on and not teleporting, this will affect objects along the entire sweep volume..  

## Outputs

Out: Exec.

Sweep Hit Result: Hit Result Structure. Hit result from any impact if sweep is true..

