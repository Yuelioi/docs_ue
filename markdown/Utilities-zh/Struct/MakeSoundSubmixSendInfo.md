# MakeSoundSubmixSendInfo

添加一个节点，从其成员中创建一个 "SoundSubmixSendInfo"。

## 图示

![]($-20221218-15015415.png)

## Inputs

发送水平控制方法。ESendLevelControlMethod Enum.发送电平控制方法：。手动。只使用发送电平。线性。根据听众的距离（在距离最小和距离最大之间），在最小和最大发送水平之间进行插值。自定义曲线。使用浮动曲线将发送电平映射到距离（0.0-1.0的曲线映射到距离最小-距离最大）。

发送阶段。ESubmixSendStage Enum.发送阶段：。定义发送应该发生在哪个混音阶段。

Sound Submix:Sound Submix基础对象参考。Sound Submix:.要发送音频的子混音。

发送水平。Float (single-precision).发送电平：。要发送的音频量。

禁用手动发送钳制。布尔值。Disable Manual Send Clamp:（禁用手动发送钳位）。是否禁用手动SendLevel控制的0-1钳制。

最小发送水平。Float (single-precision).最小发送水平：。当声音位于与最小发送距离中指定的值相等的距离时，向主站发送的数量。

最大发送水平。Float（单精度）。最大发送电平：。当声音位于与最大发送距离中指定的值相等的距离时，向主站发送的数量。

最小发送距离。Float (single-precision).最小发送距离：。发送给主站的最小距离。

最大发送距离。Float (single-precision).最大发送距离：。向主站发送的最大距离。

自定义发送水平曲线。运行时浮动曲线结构。自定义发送电平曲线：。自定义混响发送曲线，用于基于距离的发送电平。  

## Outputs

Sound Submix Send Info:Sound Submix Send Info结构。
