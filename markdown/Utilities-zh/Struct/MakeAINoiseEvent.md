# MakeAINoiseEvent

添加一个节点，从其成员中创建一个 "AINoiseEvent"。

## 图示

![]($-20221218-14463037.png)

## Inputs

噪声位置。向量。Noise Location:.如果不设置Instigator的位置将被使用。

响度。Float（单精度）。响度:.声音的响度修改器。如果MaxRange非零，这就修改了范围（通过乘法）。如果没有MaxRange，那么如果Square(DistanceToSound)<=Square(HearingRange) * Loudness，就可以听到这个声音，否则就是假的。

最大范围。浮点数（单精度）。最大范围：。可以听到声音的最大范围。乘以响度。值为0表示没有范围限制，但听众仍受其自身听力范围的限制。

指导者。演员对象参考。Instigator:.触发声音的行为者.

标签。名称。标签：.噪声的命名标识符...  

## Outputs

AINoise事件。AINoise 事件结构。
