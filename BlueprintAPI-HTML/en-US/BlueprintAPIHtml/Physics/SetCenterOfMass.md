# SetCenterOfMass

Set the center of mass of a single body. This will offset the physx-calculated center of mass.. Note that in the case where multiple bodies are attached together, the center of mass will be set for the entire group.

Target is Primitive Component

## 图示

![]($-20221218-20283802.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Center Of Mass Offset: Vector. User specified offset for the center of mass of this object, from the calculated location..

Bone Name: Name. If a SkeletalMeshComponent, name of body to set center of mass of. 'None' indicates root body..  

## Outputs

Out: Exec.

