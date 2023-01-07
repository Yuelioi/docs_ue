# InsertPoint

将给定的点插入 Octree 结构中。如果 bRefreshPointsBounds 被设置为 false，请确保你手动调用 RefreshBounds()，否则云计算中心化可能无法正确工作。

目标是激光雷达点云

## 图示

![](/uploads/projects/ue-bluprint/20221218-19432290.png)

## Inputs

在。执行。

目标。激光雷达点云对象参考。

点。激光雷达点云的点结构（按参考）。

重复处理。ELidarPointCloudDuplicateHandling Enum.

刷新点的界限。布尔型。

翻译。向量（由参考）。

## Outputs

出：执行。

<hr>

Inserts the given point into the Octree structure.. If bRefreshPointsBounds is set to false, make sure you call RefreshBounds() manually or cloud centering may not work correctly.

Target is Lidar Point Cloud

## 图示

![](/uploads/projects/ue-bluprint/20221218-19432290.png)

## Inputs

In: Exec.

Target: Lidar Point Cloud Object Reference.

Point: Lidar Point Cloud Point Structure (by ref).

Duplicate Handling: ELidarPointCloudDuplicateHandling Enum.

Refresh Points Bounds: Boolean.

Translation: Vector (by ref).

## Outputs

Out: Exec.
