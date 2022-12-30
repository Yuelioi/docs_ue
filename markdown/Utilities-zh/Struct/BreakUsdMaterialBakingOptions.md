# BreakUsdMaterialBakingOptions

添加一个节点，将'UsdMaterialBakingOptions'分解成其成员字段

## 图示

![]($-20221218-14450293.png)

## Inputs

Usd材料烘烤选项。Usd材料烘烤选项结构（按参考）。  

## Outputs

属性。属性条目结构的数组。Properties:（属性）。材料应该被烘烤出来的属性。

默认的纹理尺寸。Int点结构。Default Texture Size:（默认纹理尺寸）。所有没有设置CustomSize的属性的烘烤纹理的尺寸。

Textures Dir：目录路径结构。Textures Dir:。放置烘培纹理的地方。故意不是一个配置，因为它在很大程度上取决于舞台的位置。
