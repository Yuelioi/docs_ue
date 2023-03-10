# GetPointsinSphereasCopies

用给定球体内的点的副本填充数组。如果选择了 ReturnWorldSpace，点的位置将被转换为绝对值，否则它们将是相对于云的中心。

目标是激光雷达点云组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-19431411.png)

## Inputs

在。执行。

目标。激光雷达点云组件对象参考。

中心。矢量。

半径。Float（单精度）。

仅可见。布尔型。

返回世界空间。布尔值。

## Outputs

出：执行。

返回值。激光雷达点云点结构的数组。用给定范围内的点的副本来填充数组。如果选择 ReturnWorldSpace，点的位置将被转换为绝对值，否则它们将是相对于云的中心。

<hr>

Populates the array with copies of points within the given sphere.. If ReturnWorldSpace is selected, the points' locations will be converted into absolute value, otherwise they will be relative to the center of the cloud.

Target is Lidar Point Cloud Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-19431411.png)

## Inputs

In: Exec.

Target: Lidar Point Cloud Component Object Reference.

Center: Vector.

Radius: Float (single-precision).

Visible Only: Boolean.

Return World Space: Boolean.

## Outputs

Out: Exec.

Return Value: Array of Lidar Point Cloud Point Structures. Populates the array with copies of points within the given sphere.. If ReturnWorldSpace is selected, the points' locations will be converted into absolute value, otherwise they will be relative to the center of the cloud..
