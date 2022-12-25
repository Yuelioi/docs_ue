# InsertPoints

将一组点插入Octree结构中，多线程。如果bRefreshPointsBounds被设置为false，请确保你手动调用RefreshBounds()，否则云计算中心化可能无法正确工作。

目标是激光雷达点云

## 图示

![]($-20221218-19432401.png)

## Inputs

在。执行。

目标。激光雷达点云对象参考。

点。激光雷达点云的点结构阵列。

重复处理。ELidarPointCloudDuplicateHandling Enum.

刷新点的界限。布尔型。

翻译。向量（由参考）。  

## Outputs

出：执行。
