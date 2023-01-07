# SetLayerColor

设置特定图层的每层颜色乘数（与瓦片贴图颜色相乘，并作为顶点颜色传递给材质）。注意：这只对拥有自己的瓷砖贴图的组件有效（OwnsTileMap 返回 true），你不能修改独立的瓷砖贴图资产。

目标是纸质瓦片地图组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-21024775.png)

## Inputs

在。执行。

目标。纸质瓦片地图组件对象参考。

新颜色：线性颜色结构。

层：整数。

## Outputs

出：执行。

<hr>

Sets the per-layer color multiplier for a specific layer (multiplied with the tile map color and passed to the material as a vertex color). Note: This will only work on components that own their own tile map (OwnsTileMap returns true), you cannot modify standalone tile map assets

Target is Paper Tile Map Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-21024775.png)

## Inputs

In: Exec.

Target: Paper Tile Map Component Object Reference.

New Color: Linear Color Structure.

Layer: Integer.

## Outputs

Out: Exec.
