# SetPhysicsAngularVelocityinRadia-

Set the angular velocity of a single body.. This should be used cautiously - it may be better to use AddTorque or AddImpulse.

Target is Primitive Component

## 图示

![]($-20221218-20285789.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

New Ang Vel: Vector. New angular velocity to apply to body, in radians per second..

Add to Current: Boolean. If true, NewAngVel is added to the existing angular velocity of the body..

Bone Name: Name. If a SkeletalMeshComponent, name of body to modify angular velocity of. 'None' indicates root body..  

## Outputs

Out: Exec.

