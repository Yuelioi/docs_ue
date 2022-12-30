# MakeDisplayClust-_11

添加一个节点，从其成员中创建一个 "DisplayClusterConfigurationICVFX_LightcardSettings"。

## 图示

![]($-20221218-14502819.png)

## Inputs

启用灯光卡。布尔值。启用：。启用灯光卡。

忽略光卡外部视口的冻结。布尔值。Ignore Outer Viewports Freezing for Lightcards:.忽略外视口的冻结。Enable/Disable freeze rendering for lightcards when outer viewports rendering also freeze.这将影响性能。

混合模式。EDisplayClusterConfigurationICVFX_LightcardRenderMode枚举。Blendingmode:.混合模式。指定如何渲染与内部地壳有关的光卡。

光卡内容。显示集群配置 ICVFX可见度列表结构。只显示列表：。这里指定的内容将被视为光卡，并遵守混合模式的设置。

渲染设置。显示集群配置 ICVFX Lightcard 渲染设置结构。渲染设置：.配置该视口的全局渲染设置。  

## Outputs

显示群集配置ICVFX光卡设置。显示群组配置 ICVFX光卡设置结构。
