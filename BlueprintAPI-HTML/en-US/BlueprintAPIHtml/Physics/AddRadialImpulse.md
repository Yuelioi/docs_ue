# AddRadialImpulse

Add an impulse to all rigid bodies in this component, radiating out from the specified position.

Target is Primitive Component

## 图示

![]($-20221218-20204399.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Origin: Vector. Point of origin for the radial impulse blast, in world space.

Radius: Float (single-precision). Size of radial impulse. Beyond this distance from Origin, there will be no affect..

Strength: Float (single-precision). Maximum strength of impulse applied to body..

Falloff: ERadialImpulseFalloff Enum. Allows you to control the strength of the impulse as a function of distance from Origin..

Vel Change: Boolean. If true, the Strength is taken as a change in velocity instead of an impulse (ie. mass will have no effect)..  

## Outputs

Out: Exec.

