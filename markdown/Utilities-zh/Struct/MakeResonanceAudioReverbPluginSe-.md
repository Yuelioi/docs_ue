# MakeResonanceAudioReverbPluginSe-

添加一个节点，从其成员中创建一个 "ResonanceAudioReverbPluginSettings"。

## 图示

![]($-20221218-15000244.png)

## Inputs

启用房间效果。布尔值。启用房间效果：。共振音频的房间效果是否被启用。

房间位置。向量。房间位置：。房间在三维空间的位置。

房间旋转。Quat结构。房间旋转：。房间在三维空间的旋转。

房间尺寸。向量。房间尺寸：。三维空间中的房间尺寸。

左壁材料。ERaMaterialName枚举。左墙材料：。左侧墙壁的声学材料。

右壁材料。ERaMaterialName枚举。右墙材料：。右墙声学材料。

地板材料。ERaMaterialName枚举。地板材料：。地板吸音材料。

吊顶材料。ERaMaterialName枚举。天花板材料：。天花板吸音材料。

前墙材料。ERaMaterialName枚举。前墙材料：。前墙声学材料。

后墙材料。ERaMaterialName枚举。后墙材料：。后墙声学材料。

反射标量。Float (single-precision).反射Scalar:。早期反射的增益倍数。默认：1.0。

混响增益。Float（单精度）。混响增益：。混响增益的乘数。默认值：1.0。

混响时间修改器。Float（单精度）。混响时间修改器：。混响时间修改器。默认值：1.0。

混响亮度。Float（单精度）。混响亮度：。混响亮度修改器。默认值：0.0。  

## Outputs

共振音频混响插件设置。共振音频混响插件设置结构。
