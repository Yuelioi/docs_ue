# AddAngularImpulseinRadians

Add an angular impulse to a single rigid body. Good for one time instant burst.

Target is Primitive Component

## 图示

![]($-20221218-20203336.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Impulse: Vector.

Bone Name: Name. If a SkeletalMeshComponent, name of body to apply angular impulse to. 'None' indicates root body..

Vel Change: Boolean. If true, the Strength is taken as a change in angular velocity instead of an impulse (ie. mass will have no effect)..  

## Outputs

Out: Exec.

