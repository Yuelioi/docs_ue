# SetTile

修改指定的瓦片单元的内容（注意：这只对拥有自己瓦片图的组件有效（OwnsTileMap 返回 true），你不能修改独立的瓦片图资产）。注意：默认情况下不更新碰撞，如果有必要，在一帧中完成所有编辑后再调用 RebuildCollision。

目标是纸质瓦片地图组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-21025229.png)

## Inputs

在。执行。

目标。纸质瓦片地图组件对象参考。

X：整数。

Y：整数。

层：整数。

新的价值。Paper Tile 信息结构。

## Outputs

出：执行。

<hr>

Modifies the contents of a specified tile cell (Note: This will only work on components that own their own tile map (OwnsTileMap returns true), you cannot modify standalone tile map assets). Note: Does not update collision by default, call RebuildCollision after all edits have been done in a frame if necessary

Target is Paper Tile Map Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-21025229.png)

## Inputs

In: Exec.

Target: Paper Tile Map Component Object Reference.

X: Integer.

Y: Integer.

Layer: Integer.

New Value: Paper Tile Info Structure.

## Outputs

Out: Exec.
