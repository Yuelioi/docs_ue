# BreakEnvelopeFollowerGeneratorPa-

添加一个节点，将'EnvelopeFollowerGeneratorParams'分解成其成员字段

## 图示

![]($-20221218-14355019.png)

## Inputs

Envelope Follower Generator Params。Envelope Follower Generator Params结构（通过引用）。 

## Outputs

旁路。Boolean（布尔）。绕过：。如果为真，则绕过发生器，不受参数、补丁或混合调制的影响（保持活动和计算）。

Invert（反转）。布尔型。反转：。如果为真，则反转输出。

音频总线：音频总线对象参考。音频总线:. 音频总线跟随振幅并产生调制控制信号。

Gain（增益）。Float（单精度）。增益：。应用于振幅信号的增益。

攻击时间。浮点（单精度）。攻击时间：。包络响应的启动时间（秒）。

释放时间。Float（单精度）。释放时间：。包络响应的释放时间（单位：秒）。
