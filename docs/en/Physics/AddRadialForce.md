# AddRadialForce

Add a force to all bodies in this component, originating from the supplied world-space location.

Target is Primitive Component

## 图示

![]($-20221218-20204287.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Origin: Vector. Origin of force in world space..

Radius: Float (single-precision). Radius within which to apply the force..

Strength: Float (single-precision). Strength of force to apply..

Falloff: ERadialImpulseFalloff Enum. Allows you to control the strength of the force as a function of distance from Origin..

Accel Change: Boolean. If true, Strength is taken as a change in acceleration instead of a physical force (i.e. mass will have no effect)..  

## Outputs

Out: Exec.

