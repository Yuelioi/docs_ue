# BreakSubmixEffectDynamicsProcess-

添加一个节点，将'SubmixEffectDynamicsProcessorSettings'分解成其成员字段

## 图示

![]($-20221218-14440008.png)

## Inputs

Submix Effect Dynamics处理器设置。Submix效果动态处理器设置结构（按参考）。  

## Outputs

类型。ESubmixEffectDynamicsProcessorType枚举。动态处理器类型：。要应用的处理器的类型。

峰值模式。ESubmixEffectDynamicsPeakMode枚举。峰值模式：。在输入键信号上使用的峰值检测模式。

链接模式。ESubmixEffectDynamicsChannelLinkMode枚举。链接模式：。如果关键信号是多通道的，峰值检测的模式。

输入增益（D B）。Float（单精度）。输入增益Db：。动态处理器的输入增益。

阈值（D B）。Float (single-precision).阈值Db：。进行动态处理操作的阈值。

比率。Float（单精度）。比率：。用于压缩/扩展的动态处理器比率。

膝关节（D B）。Float（单精度）。膝部带宽Db:。要使用的处理器的膝关节带宽。

向前看（Ms）。Float (single-precision).超前看Msec:。超前看当前音频的时间量（允许在动态处理中包括瞬态）。

攻击时间（Ms）。Float (single-precision).攻击时间Msec:。进入任何动态处理效果的时间量。

释放时间（Ms）。Float (single-precision).释放时间Msec:。释放动态处理效果的时间量。

关键源。ESubmixEffectDynamicsKeySource枚举。键值来源。

外部音频总线: 音频总线对象参考.外部音频总线：。如果设置，使用所提供的音频总线的输出作为动态处理器的输入信号的调制器（使用输入信号作为默认调制器）。

外部子混音。Sound Submix Object Reference.External Submix:（外部混音）。如果设置，使用所提供的子混音的输出作为动态处理器的输入信号的调制器（使用输入信号作为默认调制器）。

模拟模式。布尔型。模拟模式：。切换处理攻击和释放包络的模拟式和数字式（模拟式的反应会更自然/更慢）。

旁路。布尔型。旁路：。是否绕过效果。

关键的试听。Boolean.按键试听：。试听按键调制信号，绕过包络和处理输入信号。

外部输入增益（D B）。Float（单精度）。按键增益Db：。如果钥匙源没有设置为默认（输入），则应用于钥匙信号的增益。

输出增益（D B）。Float（单精度）。输出增益Db：。动态处理器的输出增益。

关键的高架。Submix Effect动态处理器滤波器设置结构。按键高架：。钥匙信号的高架滤波器设置（如果提供了外部信号，或者没有提供输入信号）。

关键的Lowshelf。Submix Effect动态处理器过滤器设置结构。按键低保：。钥匙信号的低频滤波器设置（如果提供了外部信号，或者没有提供输入信号）。
