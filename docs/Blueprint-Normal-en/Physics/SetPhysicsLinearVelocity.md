# SetPhysicsLinearVelocity

Set the linear velocity of a single body.. This should be used cautiously - it may be better to use AddForce or AddImpulse.

Target is Primitive Component

## 图示

![]($-20221218-20290027.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

New Vel: Vector. New linear velocity to apply to physics..

Add to Current: Boolean. If true, NewVel is added to the existing velocity of the body..

Bone Name: Name. If a SkeletalMeshComponent, name of body to modify velocity of. 'None' indicates root body..  

## Outputs

Out: Exec.

