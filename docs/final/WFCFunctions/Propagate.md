# Propagate

传播阶段：。这个过程通过与相邻瓦片检查约束的有效性来检查在观察过程中做出的选择是否有效。邻近的瓦片可以减少其剩余选项，只包括有效的选项。如果一个瓦片的剩余选项被修改，被修改的瓦片的相邻瓦片将被添加到一个队列中。在这个过程中，如果遇到任何矛盾（剩余选项为零的瓦片），当前的求解将失败。

目标是波函数塌陷子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21332518.png)

## Inputs

在。执行。

目标。波函数折叠子系统对象参考。

## Outputs

出：执行。

瓷砖。阵列的波函数塌陷瓦片结构。瓷砖的阵列（按参考）。

剩余的瓷砖。整数的数组。剩余瓦片的索引数组。半排序。最小熵的瓷砖在前面，其余的保持不排序（通过 ref）。

观察队列。整数与波函数折叠队列的映射 元素结构。数组，用于存储需要检查其余选项是否受到影响的瓦片（通过 ref）。

传播次数。整数。传播次数的计数器。

返回值。布尔值。

<hr>

Propagation phase:. This process checks if the selection made during the observation is valid by checking constraint validity with neighboring tiles.. Neighboring tiles may reduce their remaining options to include only valid options.. If the remaining options of a tile were modified, the neighboring tiles of the modified tile will be added to a queue.. During this process, if any contradiction (a tile with zero remaining options) is encountered, the current solve will fail.

Target is Wave Function Collapse Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21332518.png)

## Inputs

In: Exec.

Target: Wave Function Collapse Subsystem Object Reference.

## Outputs

Out: Exec.

Tiles: Array of Wave Function Collapse Tile Structures. Array of tiles (by ref).

Remaining Tiles: Array of Integers. Array of remaining tile indices. Semi-sorted: Min Entropy tiles at the front, the rest remains unsorted (by ref).

Observation Queue: Map of Integers to Wave Function Collapse Queue Element Structures. Array to store tiles that need to be checked whether remaining options are affected (by ref).

Propagation Count: Integer. Counter for propagation passes.

Return Value: Boolean.
