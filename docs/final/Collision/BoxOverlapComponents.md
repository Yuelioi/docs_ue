# BoxOverlapComponents

返回一个与给定的轴对齐的盒子重叠的组件数组。

目标是 Kismet 系统库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18183175.png)

## Inputs

在。执行。

箱子位置。矢量。盒子的中心。

延伸。矢量。

对象类型。EObjectTypeQuery 枚举的数组。

组件类过滤器。对象类参考。

忽略的演员。演员对象引用数组。忽略列表中的这些演员。

## Outputs

输出。执行：执行。

Out Components: 原始组件对象引用数组。

返回值。布尔值。如果有通过过滤器的重叠，则为真，否则为假。

<hr>

Returns an array of components that overlap the given axis-aligned box.

Target is Kismet System Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18183175.png)

## Inputs

In: Exec.

Box Pos: Vector. Center of box..

Extent: Vector.

Object Types: Array of EObjectTypeQuery Enums.

Component Class Filter: Object Class Reference.

Actors to Ignore: Array of Actor Object References. Ignore these actors in the list.

## Outputs

Out: Exec.

Out Components: Array of Primitive Component Object References.

Return Value: Boolean. true if there was an overlap that passed the filters, false otherwise..
