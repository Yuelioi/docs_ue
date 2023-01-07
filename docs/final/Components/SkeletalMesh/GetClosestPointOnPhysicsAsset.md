# GetClosestPointOnPhysicsAsset

给定一个世界位置，找到物理资产上最近的点。注意，这与碰撞和焊接无关。这纯粹是基于动画的位置

目标是骨骼网格组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18260833.png)

## Inputs

目标。骨架网状结构组件对象参考。

世界位置。矢量（通过参考）。我们想要的最接近的点（即对于物理资产中的所有体，找到有最接近世界位置的点的那个）。

## Outputs

最接近的世界位置。矢量。

法线。向量。

骨骼名称。名称。

距离。Float（单精度）。

返回值。布尔值。如果我们找到一个最近的点，则为真。

<hr>

Given a world position, find the closest point on the physics asset. Note that this is independent of collision and welding. This is based purely on animation position

Target is Skeletal Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18260833.png)

## Inputs

Target: Skeletal Mesh Component Object Reference.

World Position: Vector (by ref). The point we want the closest point to (i.e. for all bodies in the physics asset, find the one that has a point closest to WorldPosition).

## Outputs

Closest World Position: Vector.

Normal: Vector.

Bone Name: Name.

Distance: Float (single-precision).

Return Value: Boolean. true if we found a closest point.
