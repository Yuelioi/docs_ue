# Observe

观察阶段：。这个过程从最小熵瓦片中随机选择一个瓦片。然后随机选择该瓦片的有效选项

目标是波函数塌陷子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21332397.png)

## Inputs

在。执行。

目标。波函数折叠子系统对象参考。

随机种子：整数。

## Outputs

出：执行。

瓷砖。阵列的波函数塌陷瓦片结构。瓷砖的阵列（按参考）。

剩余的瓷砖。整数的数组。剩余瓦片的索引数组。半排序。最小熵的瓷砖在前面，其余的保持不排序（通过 ref）。

观察队列。整数的映射到波函数折叠队列 元素结构。数组，用于存储需要检查其余选项在传播阶段是否受到影响的瓦片（通过 ref）。

返回值。布尔值。

<hr>

Observation phase:. This process randomly selects one tile from minimum entropy tiles. then randomly selects a valid option for that tile

Target is Wave Function Collapse Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21332397.png)

## Inputs

In: Exec.

Target: Wave Function Collapse Subsystem Object Reference.

Random Seed: Integer.

## Outputs

Out: Exec.

Tiles: Array of Wave Function Collapse Tile Structures. Array of tiles (by ref).

Remaining Tiles: Array of Integers. Array of remaining tile indices. Semi-sorted: Min Entropy tiles at the front, the rest remains unsorted (by ref).

Observation Queue: Map of Integers to Wave Function Collapse Queue Element Structures. Array to store tiles that need to be checked whether remaining options are affected during propagation phase (by ref).

Return Value: Boolean.
