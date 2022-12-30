# MakeAttenuationSubmixSendSetting-

添加一个节点，从其成员中创建一个 "AttenuationSubmixSendSettings"。

## 图示

![]($-20221218-14472527.png)

## Inputs

Submix:Sound Submix基础对象参考。Submix:.根据距离，将音频发送到子混音。

Submix发送方法。ESubmixSendMethod Enum.Submix Send Method:.子混音发送方法。使用什么方法来使用submix发送。

子混音最小发送电平。Float (single-precision).子混音发送水平最小值：。当声音位于等于子混音发送距离最小值中指定的距离时，要发送至子混音的数量。

子混音最大发送电平。Float (single-precision).副混音器最大发送电平：。当声音位于与混响最大发送距离中指定的数值相等的距离时，要发送至子混音的数量。

Submix最小发送距离。Float (single-precision).Submix Send Distance Min:（子混音最小发送距离）。发送到Submix的最小距离。

Submix最大发送距离。Float (single-precision).Submix Send Distance Max:（子混音最大发送距离）。发送到子混音的最大距离。

手动副混音器发送电平。Float（单精度）。手动副混音器发送电平：。要使用的手动子混音发送电平。不随距离的变化而变化。

自定义子混音发送曲线。运行时浮动曲线结构。自定义Submix发送曲线：.自定义Submix发送曲线，用于基于距离的发送水平。  

## Outputs

衰减子混音发送设置。衰减子混音发送设置结构。
