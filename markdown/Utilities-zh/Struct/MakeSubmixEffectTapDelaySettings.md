# MakeSubmixEffectTapDelaySettings

添加一个节点，从其成员中创建一个 "SubmixEffectTapDelaySettings"。

## 图示

![]($-20221218-15025127.png)

## Inputs

最大延时长度。Float (single-precision).最大延时长度：。延迟的最大可能长度，单位是毫秒。在运行时改变这个将重置效果。

插值时间。Float (single-precision).插值时间：。分接点达到它的设定长度和增益的毫秒数。较小的值反应更快，而较大的值会使投球的戏剧性降低。

抽头。分接点延迟信息结构的阵列。Taps:.每个分接点的元数据。  

## Outputs

Submix Effect Tap Delay Settings:Submix Effect Tap Delay Settings结构。
