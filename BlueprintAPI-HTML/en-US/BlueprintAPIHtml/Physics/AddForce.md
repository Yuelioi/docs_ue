# AddForce

Add a force to a single rigid body.. This is like a 'thruster'. Good for adding a burst over some (non zero) time. Should be called every frame for the duration of the force.

Target is Primitive Component

## 图示

![]($-20221218-20203456.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Force: Vector. Force vector to apply. Magnitude indicates strength of force..

Bone Name: Name. If a SkeletalMeshComponent, name of body to apply force to. 'None' indicates root body..

Accel Change: Boolean. If true, Force is taken as a change in acceleration instead of a physical force (i.e. mass will have no effect)..  

## Outputs

Out: Exec.

