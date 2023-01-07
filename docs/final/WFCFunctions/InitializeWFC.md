# InitializeWFC

初始化 WFC 进程，设置 Tiles 和 RemainingTiles 数组。用 StarterOptions、BorderOptions 和 InitialTiles 预先填充瓷砖。

目标是波函数塌陷子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21332163.png)

## Inputs

在。执行。

目标。波函数折叠子系统对象参考。

## Outputs

出：执行。

瓷砖。阵列的波函数塌陷瓦片结构。瓷砖的阵列（按参考）。

剩余的瓷砖。整数的数组。剩余瓦片的索引数组。半排序。最小熵的瓷砖在前面，其余的保持不排序（通过 ref）。

<hr>

Initialize WFC process which sets up Tiles and RemainingTiles arrays. Pre-populates Tiles with StarterOptions, BorderOptions and InitialTiles

Target is Wave Function Collapse Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21332163.png)

## Inputs

In: Exec.

Target: Wave Function Collapse Subsystem Object Reference.

## Outputs

Out: Exec.

Tiles: Array of Wave Function Collapse Tile Structures. Array of tiles (by ref).

Remaining Tiles: Array of Integers. Array of remaining tile indices. Semi-sorted: Min Entropy tiles at the front, the rest remains unsorted (by ref).
