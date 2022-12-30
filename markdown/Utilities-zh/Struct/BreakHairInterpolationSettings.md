# BreakHairInterpolationSettings

添加一个节点，将'HairInterpolationSettings'分解成其成员字段

## 图示

![]($-20221218-14375830.png)

## Inputs

头发插值设置。头发插值设置结构（按参考）。  

## Outputs

覆盖指南。Boolean.覆盖指南：。如果选中，用生成的指南覆盖导入的指南。

头发到指导密度。Float（单精度）。Hair to Guide Density:（毛发与导轨密度）。如果没有提供导引器，用于将头发转换为导引器曲线的密度系数。这个值应该在0到1之间，可以认为是用作导引的头发的比率/百分比。

插值质量。EHairInterpolationQuality Enum.插值质量:。内插数据的质量。

内插距离。EHairInterpolationWeight Enum.插值距离:.插值距离的度量.

随机化指南。布尔型。随机化指南：。随机化哪些指南会影响给定的发丝。

使用唯一指南。Boolean.使用独特指南：。强制要求发丝受独特指南的影响。
