# BreakSourceEffectStereoDelaySett-

添加一个节点，将'SourceEffectStereoDelaySettings'分解成其成员字段

## 图示

![]($-20221218-14433718.png)

## Inputs

源效果立体声延时设置。源效果立体声延时设置结构（按参考）。  

## Outputs

延迟模式。EStereoDelaySourceEffect Enum.延迟模式：。设置立体声延迟效果的模式。

延迟时间Msec:Float (single-precision).延迟时间Msec:。延迟线左、右通道的基本延迟量。

反馈。Float（单精度）。反馈：。一旦延时被攻克，反馈到延时线的音频量。

延迟率。Float (single-precision).Delay Ratio:。左右通道的延时差。允许左、右通道有不同的延迟量。对立体声通道的相关性很有用。

湿水平。浮点（单精度）。湿电平：。与干输入信号混合进入效果器的延迟效果量。

干燥程度。浮点（单精度）。干电平：。效果的干电平。

启用的过滤器。Boolean.启用的过滤：。是否启用过滤功能。

过滤器类型。EStereoDelayFiltertype枚举。滤波器类型：。用于反馈音频的滤波器类型。

滤波频率。Float (single-precision).滤波器频率：。滤波器的截止频率。

滤波器Q：浮点数（单精度）。滤波器Q：。滤波器的Q值。
