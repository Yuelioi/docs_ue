# SetAudioBusSendPreEffect

设置声音应该发送多少音频到给定的音频总线（PRE 源效果）。如果总线发送不存在，它将被添加到活动声音的覆盖物中。

目标是音频组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18030753.png)

## Inputs

在。执行。

目标。音频组件对象参考。

Audio Bus: 音频总线对象参考。要发送信号的总线。

音频总线发送电平。Float（单精度）。用来改变复制信号的音量的标量。

## Outputs

输出。执行。

<hr>

Sets how much audio the sound should send to the given Audio Bus (PRE Source Effects).. if the Bus Send doesn't already exist, it will be added to the overrides on the active sound.

Target is Audio Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18030753.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.

Audio Bus: Audio Bus Object Reference. The Bus to send the signal to.

Audio Bus Send Level: Float (single-precision). The scalar used to alter the volume of the copied signal.

## Outputs

Out: Exec.
