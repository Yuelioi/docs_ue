# FindClosestBone

找到离给定位置最近的骨骼

目标是带皮的网格组件

## 图示

![]($-20221218-18263827.png)

## Inputs

目标。蒙皮网状结构组件对象参考。

测试位置。矢量。要测试的位置。

忽略比例。Float（单精度）。(可选）如果指定，只考虑缩放比例大于指定系数的骨骼。

Require Physics Asset（需要物理资产）：Boolean（可选），如果为真，则只考虑具有物理功能的骨骼。 

## Outputs

骨骼位置。矢量。(可选，输出)如果指定，设置为找到的骨骼的世界空间位置，如果没有找到骨骼，则设置为(0,0,0)。

返回值。名称：找到的骨骼的名称，如果没有找到骨骼，则为'无'。
