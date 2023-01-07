# GetClosestPointonCollision

返回与碰撞面的距离和最近的点。组件必须有简单的碰撞才能被查询到最近的点。

目标是原始组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18185376.png)

## Inputs

目标。原始组件对象参考。

点。矢量（通过引用）。世界三维矢量。

骨骼名称。名称。如果是 SkeletalMeshComponent，要设置质量中心的体的名称。'无'表示根体。

## Outputs

身体上的输出点。向量。碰撞表面上最接近 Point 的点。

返回值。浮点数（单精度）。如果返回>0.f，则成功，如果返回 0.f，则不凸或在点的内部 如果返回<0.f，则此基元没有碰撞。

<hr>

Returns the distance and closest point to the collision surface.. Component must have simple collision to be queried for closest point.

Target is Primitive Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18185376.png)

## Inputs

Target: Primitive Component Object Reference.

Point: Vector (by ref). World 3D vector.

Bone Name: Name. If a SkeletalMeshComponent, name of body to set center of mass of. 'None' indicates root body..

## Outputs

Out Point on Body: Vector. Point on the surface of collision closest to Point.

Return Value: Float (single-precision). Success if returns > 0.f, if returns 0.f, it is either not convex or inside of the point If returns < 0.f, this primitive does not have collsion.
