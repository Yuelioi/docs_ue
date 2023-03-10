# IsPointinBoxwithTransform

确定一个给定的点是否在一个具有给定变换的盒子里。包括盒子上的点。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19503344.png)

## Inputs

点。矢量。要测试的点。

箱子世界的转变。转化（通过参考）。盒子的组件到世界的转换...

箱子的范围。矢量。盒子的延伸（从原点到各轴的距离），在组件空间中。

## Outputs

返回值。布尔值。该点是否在盒子里。

<hr>

Determines whether a given point is in a box with a given transform. Includes points on the box.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19503344.png)

## Inputs

Point: Vector. Point to test.

Box World Transform: Transform (by ref). Component-to-World transform of the box..

Box Extent: Vector. Extents of the box (distance in each axis from origin), in component space..

## Outputs

Return Value: Boolean. Whether the point is in the box..
