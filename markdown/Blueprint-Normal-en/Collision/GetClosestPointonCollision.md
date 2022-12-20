# GetClosestPointonCollision

Returns the distance and closest point to the collision surface.. Component must have simple collision to be queried for closest point.

Target is Primitive Component

## 图示

![]($-20221218-18185376.png)

## Inputs

Target: Primitive Component Object Reference.

Point: Vector (by ref). World 3D vector.

Bone Name: Name. If a SkeletalMeshComponent, name of body to set center of mass of. 'None' indicates root body..  

## Outputs

Out Point on Body: Vector. Point on the surface of collision closest to Point.

Return Value: Float (single-precision). Success if returns > 0.f, if returns 0.f, it is either not convex or inside of the point If returns < 0.f, this primitive does not have collsion.

