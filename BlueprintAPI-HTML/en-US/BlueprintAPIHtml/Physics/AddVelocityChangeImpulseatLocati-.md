# AddVelocityChangeImpulseatLocati-

Add an impulse to a single rigid body at a specific location. The Strength is taken as a change in angular velocity instead of an impulse (ie. mass will have no effect).

Target is Primitive Component

## 图示

![]($-20221218-20204753.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Impulse: Vector. Magnitude and direction of impulse to apply..

Location: Vector. Point in world space to apply impulse at..

Bone Name: Name. If a SkeletalMeshComponent, name of bone to apply impulse to. 'None' indicates root body..  

## Outputs

Out: Exec.

