# GetPointsasCopies

返回一个包含树上的点的副本的数组。如果选择了 ReturnWorldSpace，点的位置将被转换为绝对值，否则它们将是相对于云的中心。

目标是激光雷达点云

## 图示

![](/uploads/projects/ue-bluprint/20221218-19431190.png)

## Inputs

目标。激光雷达点云对象参考。

返回世界空间。布尔型。

开始索引。整数。

计数。整数。

## Outputs

返回值。激光雷达点云点结构的数组。返回一个包含树上的点的副本的数组。如果选择 ReturnWorldSpace，点的位置将被转换为绝对值，否则它们将是相对于云的中心。

<hr>

Returns an array with copies of points from the tree. If ReturnWorldSpace is selected, the points' locations will be converted into absolute value, otherwise they will be relative to the center of the cloud.

Target is Lidar Point Cloud

## 图示

![](/uploads/projects/ue-bluprint/20221218-19431190.png)

## Inputs

Target: Lidar Point Cloud Object Reference.

Return World Space: Boolean.

Start Index: Integer.

Count: Integer.

## Outputs

Return Value: Array of Lidar Point Cloud Point Structures. Returns an array with copies of points from the tree. If ReturnWorldSpace is selected, the points' locations will be converted into absolute value, otherwise they will be relative to the center of the cloud..
