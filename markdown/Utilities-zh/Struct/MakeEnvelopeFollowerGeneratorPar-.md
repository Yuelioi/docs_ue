# MakeEnvelopeFollowerGeneratorPar-

添加一个节点，从其成员中创建一个'EnvelopeFollowerGeneratorParams'。

## 图示

![]($-20221218-14522883.png)

## Inputs

旁路。布尔型。旁路：。如果为真，则绕过发生器，不受参数、补丁或混合的调制（保持活动和计算）。

反转。布尔型。反转：。如果为真，则反转输出。

音频总线: 音频总线对象参考.音频总线:.AudioBus跟随振幅并产生调制控制信号。

增益。Float（单精度）。增益：。应用于振幅信号的增益。

攻击时间。Float（单精度）。攻击时间：。包络响应的攻击时间（秒）。

释放时间。Float（单精度）。释放时间：。包络响应的释放时间（单位：秒）。  

## Outputs

Envelope Follower Generator Params:Envelope Follower Generator Params结构。
