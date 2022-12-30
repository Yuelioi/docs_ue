# AddForceatLocation

Add a force to a single rigid body at a particular location in world space.. This is like a 'thruster'. Good for adding a burst over some (non zero) time. Should be called every frame for the duration of the force.

Target is Primitive Component

## 图示

![]($-20221218-20203576.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Force: Vector. Force vector to apply. Magnitude indicates strength of force..

Location: Vector. Location to apply force, in world space..

Bone Name: Name. If a SkeletalMeshComponent, name of body to apply force to. 'None' indicates root body..  

## Outputs

Out: Exec.

