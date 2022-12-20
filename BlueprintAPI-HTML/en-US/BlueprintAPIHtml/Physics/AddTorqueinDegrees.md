# AddTorqueinDegrees

Add a torque to a single rigid body.

Target is Primitive Component

## 图示

![]($-20221218-20204519.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Torque: Vector. Torque to apply. Direction is axis of rotation and magnitude is strength of torque..

Bone Name: Name. If a SkeletalMeshComponent, name of body to apply torque to. 'None' indicates root body..

Accel Change: Boolean. If true, Torque is taken as a change in angular acceleration instead of a physical torque (i.e. mass will have no effect)..  

## Outputs

Out: Exec.

