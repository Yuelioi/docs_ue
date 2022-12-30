# GetClosestPointOnPhysicsAsset

Given a world position, find the closest point on the physics asset. Note that this is independent of collision and welding. This is based purely on animation position

Target is Skeletal Mesh Component

## 图示

![]($-20221218-18260833.png)

## Inputs

Target: Skeletal Mesh Component Object Reference.

World Position: Vector (by ref). The point we want the closest point to (i.e. for all bodies in the physics asset, find the one that has a point closest to WorldPosition).  

## Outputs

Closest World Position: Vector.

Normal: Vector.

Bone Name: Name.

Distance: Float (single-precision).

Return Value: Boolean. true if we found a closest point.

