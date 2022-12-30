# MakeUsdMeshAssetOptions

添加一个节点，从其成员中创建一个'UsdMeshAssetOptions'。

## 图示

![]($-20221218-15035634.png)

## Inputs

使用有效载荷。Boolean.使用有效载荷：。如果为真，网格数据会被导出到另一个 "有效载荷 "文件中，并通过有效载荷组成弧进行引用。

有效载荷格式。字符串。有效载荷格式：。用于导出的有效载荷文件的美元格式。

烘烤材料。Boolean.Bake Materials:（烘焙材质）。是否对网格的指定材质进行烘焙，并将其作为单独的UsdPreviewSurface资产导出。

移除虚幻材料。布尔值。移除虚幻材质：。在绑定了相应的烘焙材质后，是否要移除'unrealMaterial'属性。

材料烘烤期权。Usd材料烘烤选项结构。材料烘烤选项。

最低网格LOD：整数。Lowest Mesh LOD：。输出静态和骨架网格的最低LOD指数（使用0表示完全细节）。

最高网格LOD：整数。最高网格LOD：。输出静态和骨架网格的最高LOD指数。  

## Outputs

Usd Mesh资产期权。Usd网状资产期权结构。
