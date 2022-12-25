# IsSectionCollisionEnabled

检查一个特定的LOD网格段是否有碰撞。

目标是静态网格编辑器子系统

## 图示

![]($-20221218-21035104.png)

## Inputs

目标。静态网格编辑器子系统对象参考。

静态网格。静态网格对象参考。静态网状物，用于消除碰撞。

LODIndex。整数。StaticMesh LOD的索引。

科目索引。整数。StaticMesh截面的索引。  

## Outputs

返回值。布尔值。True是指静态网格部分的指定LOD的碰撞被启用。
