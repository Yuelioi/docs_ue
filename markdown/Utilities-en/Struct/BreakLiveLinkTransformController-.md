# BreakLiveLinkTransformController-

Adds a node that breaks a 'LiveLinkTransformControllerData' into its member fields

## 图示

![]($-20221218-14393386.png)

## Inputs

Live Link Transform Controller Data: Live Link Transform Controller Data Structure (by ref).  

## Outputs

World Transform: Boolean. World Transform:. Set the transform of the component in world space of in its local reference frame..

Sweep: Boolean. Sweep:. Whether we sweep to the destination location, triggering overlaps along the way and stopping short of the target if blocked by something.. Only the root component is swept and checked for blocking collision, child components move without sweeping. If collision is off, this has no effect..

Teleport: Boolean. Teleport:. Whether we teleport the physics state (if physics collision is enabled for this object).. If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location).. If false, physics velocity is updated based on the change in position (affecting ragdoll parts).. If CCD is on and not teleporting, this will affect objects along the entire sweep volume..

