# MakeBaseAttenuationSettings

添加一个节点，从其成员中创建一个'BaseAttenuationSettings'。

## 图示

![]($-20221218-14474249.png)

## Inputs

衰减功能。EAttenuationDistanceModel枚举。距离算法：。衰减的类型作为距离的函数来使用。

衰减形状。EAttenuationShape Enum.衰减形状：。非自定义衰减方法的形状。

最大处的衰减（D B）。Float（单精度）。D BAttenuation at Max: 。在衰减距离上的衰减量，单位是分贝（仅适用于 "自然声 "距离算法）。

衰减模式。ENaturalSoundFalloffMode Enum.衰减模式：。当超出衰减范围时，是继续衰减，还是保持最后的音量值，并且'Attenuation At Max (dB)'被设置为大于-60dB...（仅适用于'自然声'距离算法）。*/.

衰减形状的范围。矢量。衰减形状的外延：。衰减形状使用的尺寸。每个形状的值的解释不同。Sphere - X是球体半径。Y和Z未使用。胶囊 - X是胶囊半高，Y是胶囊半径，Z是未使用的。盒子 - X, Y, 和 Z 是盒子的尺寸。锥体 - X是锥体半径，Y是锥体角度，Z是锥体脱落角度。

锥体偏移。Float（单精度）。锥体偏移：。当使用锥体衰减形状时，从声音的原点向后开始锥体的距离。

漂移距离。Float（单精度）。衰减距离：。发生体积衰减的距离。

锥体球体半径。Float（单精度）。Cone Sphere Radius:.一个可选的衰减半径（球体），从圆锥体的原点延伸出来。

锥体球体漂移距离。Float（单精度）。Cone Sphere Falloff Distance：.对于可选的球体形状，发生体积衰减的距离。

自定义衰减曲线。运行时浮动曲线结构。自定义衰减曲线：。要使用的自定义音量衰减曲线。

## Outputs

基准衰减设置。基础衰减设置结构。
