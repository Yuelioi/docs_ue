# GetCenterOfMass

Get the center of mass of a single body. In the case of a welded body this will return the center of mass of the entire welded body (including its parent and children). Objects that are not simulated return (0,0,0) as they do not have COM

Target is Primitive Component

## 图示

![]($-20221218-20274216.png)

## Inputs

Target: Primitive Component Object Reference.

Bone Name: Name. If a SkeletalMeshComponent, name of body to get center of mass of. 'None' indicates root body..  

## Outputs

Return Value: Vector.

