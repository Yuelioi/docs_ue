# MakeSubmixEffectMultibandCompres-

添加一个节点，从其成员中创建一个 "SubmixEffectMultibandCompressorSettings"。

## 图示

![]($-20221218-15024688.png)

## Inputs

类型。ESubmixEffectDynamicsProcessorType枚举。动态处理器类型：。控制每个频段对高于其阈值的音频的反应。

峰值模式。ESubmixEffectDynamicsPeakMode枚举。峰值模式：。控制波段对高于其阈值的信号的反应速度。

链接模式。ESubmixEffectDynamicsChannelLinkMode枚举。链接模式：。是否对所有通道进行同样的压缩，以及如何评估整体水平。

向前看（Ms）。Float (single-precision).超前看Msec:。领先于当前音频的时间量。允许在动态处理中包括瞬态现象。

模拟模式。布尔值。模拟模式：。切换处理攻击和释放包络的模拟模式和数字模式。模拟的反应会更自然/更慢。

四极。布尔型。四极：。关闭四极模式将使用更便宜、更浅的两极分频器。

旁路。布尔型。旁路：。是否绕过效果。

关键源。ESubmixEffectDynamicsKeySource枚举。键值来源。

外部音频总线: 音频总线对象参考.外部音频总线：。如果设置了，则使用所提供的子混音的输出作为动态处理器的输入信号的调制器（使用输入信号作为默认调制器）。

外部子混音。Sound Submix Object Reference.External Submix:（外部混音）。如果设置，使用所提供的子混音的输出作为动态处理器的输入信号的调制器（使用输入信号作为默认调制器）。

外部输入增益（D B）。Float（单精度）。按键增益Db：。如果提供外部输入，应用于按键信号的增益。

关键的试听。Boolean.按键试听：。试听按键调制信号，绕过包络和处理输入信号。

频段。阵列的动力 乐队设置结构。频段：。每个频段都是一个完整的动态处理器，在一个独特的频率范围内影响。  

## Outputs

Submix Effect Multiband Compressor设置。Submix Effect Multiband Compressor设置结构。
