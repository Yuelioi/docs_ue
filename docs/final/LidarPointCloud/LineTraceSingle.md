# LineTraceSingle

对点云进行射线传输测试。如果命中则返回指针，否则返回nullptr。

目标是激光雷达点云组件

## 图示

![]($-20221218-19433144.png)

## Inputs

目标。激光雷达点云组件对象参考。

原产地。向量。

方向。矢量。

半径。Float（单精度）。

仅可见。布尔型。  

## Outputs

点击：激光雷达点云点结构。

返回值。布尔值。对点云进行射线传输测试。如果命中则返回指针，否则返回nullptr。

Performs a raycast test against the point cloud. Returns the pointer if hit or nullptr otherwise.

Target is Lidar Point Cloud Component

## 图示

![]($-20221218-19433144.png)

## Inputs

Target: Lidar Point Cloud Component Object Reference.

Origin: Vector.

Direction: Vector.

Radius: Float (single-precision).

Visible Only: Boolean.  

## Outputs

Point Hit: Lidar Point Cloud Point Structure.

Return Value: Boolean. Performs a raycast test against the point cloud. Returns the pointer if hit or nullptr otherwise..

