# BreakAINoiseEvent

添加一个节点，将'AINoiseEvent'分解到其成员字段中

## 图示

![]($-20221218-14304608.png)

## Inputs

AINoise事件。AINoise事件结构（通过引用）。 

## Outputs

噪声位置。向量。Noise Location:.如果没有设置Instigator的位置将被使用。

Loudness（响度）。Float（单精度）。响度:。声音的响度修改器。如果MaxRange非零，这就修改了范围（通过乘法）。如果没有MaxRange，那么如果Square(DistanceToSound)<=Square(HearingRange) * Loudness，就可以听到这个声音，否则为假。

最大范围。Float（单精度）。最大范围：。可以听到声音的最大范围。乘以响度。值为0表示没有范围限制，但听众仍受其自身听力范围的限制。

指导者。Actor Object Reference. 引导者：。触发声音的行为者。

标签。名称。标签:。噪声的命名标识符。
