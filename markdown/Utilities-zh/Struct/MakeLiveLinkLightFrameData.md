# MakeLiveLinkLightFrameData

添加一个节点，从其成员中创建一个 "LiveLinkLightFrameData"。

## 图示

![]($-20221218-14565807.png)

## Inputs

温度。Float（单精度）。温度：。黑体光源的色温，单位是开尔文。

强度。浮点数（单精度）。强度：。光发射的总能量，单位是勒克斯。

灯光颜色：颜色结构。光的颜色:。光的滤色.

内锥角。浮点（单精度）。内锥角：。聚光灯下的内锥角，单位是度。

外锥体角度。浮点（单精度）。外锥角：。聚光灯的外锥角，单位是度。

衰减半径。Float（单精度）。衰减半径：。光的可见影响。适用于Pointlight和Spotlight...

源半径。Float（单精度）。光源半径：。光源形状的半径。适用于Pointlight和Spotlight...

软源半径。Float（单精度）。软源半径：。光源形状的柔和半径。适用于Pointlight和Spotlight...

源长度。浮点数（单精度）。Source Length:（光源长度）。光源形状的长度。适用于Pointlight和Spotlight...

转变。转变。变换:。框架的变换。

元数据。现场链接元数据结构。元数据：。框架的元数据.

属性值。Float (single-precision)s阵列。属性值：。在静态结构中定义的属性值。使用FLiveLinkBaseStaticData.FindPropertyValue来评估。

## Outputs

实时链接光帧数据。现场连线灯框数据结构。
