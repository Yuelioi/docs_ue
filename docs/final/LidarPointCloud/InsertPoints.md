# InsertPoints

将一组点插入 Octree 结构中，多线程。如果 bRefreshPointsBounds 被设置为 false，请确保你手动调用 RefreshBounds()，否则云计算中心化可能无法正确工作。

目标是激光雷达点云

## 图示

![](/uploads/projects/ue-bluprint/20221218-19432401.png)

## Inputs

在。执行。

目标。激光雷达点云对象参考。

点。激光雷达点云的点结构阵列。

重复处理。ELidarPointCloudDuplicateHandling Enum.

刷新点的界限。布尔型。

翻译。向量（由参考）。

## Outputs

出：执行。

<hr>

Inserts group of points into the Octree structure, multi-threaded.. If bRefreshPointsBounds is set to false, make sure you call RefreshBounds() manually or cloud centering may not work correctly.

Target is Lidar Point Cloud

## 图示

![](/uploads/projects/ue-bluprint/20221218-19432401.png)

## Inputs

In: Exec.

Target: Lidar Point Cloud Object Reference.

Points: Array of Lidar Point Cloud Point Structures.

Duplicate Handling: ELidarPointCloudDuplicateHandling Enum.

Refresh Points Bounds: Boolean.

Translation: Vector (by ref).

## Outputs

Out: Exec.
