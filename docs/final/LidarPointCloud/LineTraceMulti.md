# LineTraceMulti

对点云进行射线传输测试。将结果填充到 OutHits 数组中。如果选择了 ReturnWorldSpace，点的位置将被转换为绝对值，否则它们将是相对于云的中心。如果有任何东西被击中，则返回 true。

目标是激光雷达点云组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-19432924.png)

## Inputs

目标。激光雷达点云组件对象参考。

原产地。向量。

方向。矢量。

半径。Float（单精度）。

仅可见。布尔型。

返回世界空间。布尔值。

## Outputs

出击。激光雷达点云点结构的阵列。

返回值。布尔值。对点云进行射线传输测试。将结果填充到 OutHits 数组中。如果选择了 ReturnWorldSpace，点的位置将被转换为绝对值，否则它们将是相对于云的中心。如果有任何东西被击中，则返回真。

<hr>

Performs a raycast test against the point cloud.. Populates OutHits array with the results.. If ReturnWorldSpace is selected, the points' locations will be converted into absolute value, otherwise they will be relative to the center of the cloud.. Returns true it anything has been hit.

Target is Lidar Point Cloud Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-19432924.png)

## Inputs

Target: Lidar Point Cloud Component Object Reference.

Origin: Vector.

Direction: Vector.

Radius: Float (single-precision).

Visible Only: Boolean.

Return World Space: Boolean.

## Outputs

Out Hits: Array of Lidar Point Cloud Point Structures.

Return Value: Boolean. Performs a raycast test against the point cloud.. Populates OutHits array with the results.. If ReturnWorldSpace is selected, the points' locations will be converted into absolute value, otherwise they will be relative to the center of the cloud.. Returns true it anything has been hit..
