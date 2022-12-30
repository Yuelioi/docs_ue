# MakeHairCardsGeometrySettings

添加一个节点，从其成员中创建一个 "HairCardsGeometrySettings"。

## 图示

![]($-20221218-14550151.png)

## Inputs

生成类型。EHairCardsGenerationType枚举。生成类型：。定义卡片的生成方式。卡片数量：定义卡片的目标数量。使用指南：使用模拟指南作为卡片。

卡片数量。整数。卡片数：。定义应该生成多少张牌。生成的数量可以更少，因为有些牌可以被其他选项丢弃。

集群类型。EHairCardsClusterType枚举。集群类型：。聚类的质量，当组发属于一个类似的卡。这并不改变卡片的数量，而只是改变卡片的形状（大小/形状）。

最小片段长度。Float (single-precision).最小网段长度：。一个卡段的最小尺寸。  

## Outputs

头发卡的几何设置。发卡的几何设置结构。
