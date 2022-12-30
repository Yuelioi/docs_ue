# BreakForceFeedbackAttenuationSet-

添加一个节点，将 "ForceFeedbackAttenuationSet "分解成其成员字段。

## 图示

![]($-20221218-14361202.png)

## 输入

强制反馈衰减设置。力反馈衰减设置结构（通过参考）。 

##输出

衰减功能。EAttenuationDistanceModel枚举。Distance Algorithm:（距离算法）。衰减的类型作为距离的函数来使用。

衰减形状。EAttenuationShape Enum. 衰减形状:。非自定义衰减方法的形状。

Attenuation at Max（D B）。Float（单精度）。D BAttenuation at Max：。在衰减距离上的衰减量，单位是分贝（仅适用于 "自然声 "距离算法）。

衰减模式。ENaturalSoundFalloffMode枚举。衰减模式：。当超出衰减范围时，是继续衰减，还是保持最后的音量值，以及 "Attenuation At Max (dB) "被设置为大于-60dB的值。*/.

衰减形状的范围。向量。Attenuation Shape Extents:（衰减形状范围）。衰减形状所使用的尺寸。每个形状的值的解释不同。Sphere - X是球体半径。Y和Z未使用。胶囊 - X是胶囊半高，Y是胶囊半径，Z是未使用的。盒子 - X, Y, 和 Z 是盒子的尺寸。锥体 - X是锥体半径，Y是锥体角度，Z是锥体落差角度。

锥体偏移。Float（单精度）。锥体偏移：。当使用锥体衰减形状时，从声音的原点回到锥体开始的距离。

衰减距离（Falloff Distance）。Float（单精度）。衰减距离：。发生音量衰减的距离。

Cone Sphere Radius（锥体半径）。Float（单精度）。Cone Sphere Radius:.锥体半径。一个可选的衰减半径（球体），从锥体原点延伸。

Cone Sphere Falloff Distance（锥体球体衰减距离）。Float（单精度）。Cone Sphere Falloff Distance（锥体球体衰减距离）:。可选球体形状发生体积衰减的距离。

Custom Attenuation Curve（自定义衰减曲线）。运行时浮点曲线结构。Custom Attenuation Curve:（自定义衰减曲线）。要使用的自定义体积衰减曲线。
