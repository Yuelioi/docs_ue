# MakeSoundSourceBusSendInfo

添加一个节点，从其成员中创建一个 "SoundSourceBusSendInfo"。

## 图示

![]($-20221218-15015328.png)

## Inputs

最小发送水平。Float (single-precision).最小发送电平：。当声音位于与最小发送距离中指定的值相等的距离时，要发送到总线上的数量。

最大发送水平。Float（单精度）。最大发送电平：。当声音位于与最大发送距离中指定的值相等的距离时，要发送到总线上的数量。

最小发送距离。Float (single-precision).最小发送距离：。最小发送水平发送到总线上的距离。

最大发送距离。Float (single-precision).最大发送距离：。将最大发送电平发送到总线的距离。

自定义发送水平曲线。运行时浮动曲线结构。自定义发送电平曲线：。用于基于距离的总线发送电平的自定义曲线。  

## Outputs

声源总线发送信息。声源总线发送信息结构。
