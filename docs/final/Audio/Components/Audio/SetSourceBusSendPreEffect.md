# SetSourceBusSendPreEffect

允许设计者以特定的音频组件实例的声音为目标，设置发送电平（复制的声音音量）到指定的源总线。如果源总线还不是声音发送的一部分，参考将被添加到这个实例的覆盖发送中。这个特殊的发送发生在源效果处理链之前。

目标是音频组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18031670.png)

## Inputs

在。执行。

目标。音频组件对象参考。

Sound Source Bus: 声源总线对象参考。发送信号的总线。

Source Bus Send Level（声源总线发送电平）。Float（单精度）。用来改变复制信号的音量的标量。

## Outputs

Out(输出) 执行。

<hr>

Allows designers to target a specific Audio Component instance?s sound and set the send level (volume of sound copied). to the indicated Source Bus. If the Source Bus is not already part of the sound?s sends, the reference will be added to. this instance?s Override sends. This particular send occurs before the Source Effect processing chain.

Target is Audio Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18031670.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.

Sound Source Bus: Sound Source Bus Object Reference. The Bus to send the signal to..

Source Bus Send Level: Float (single-precision). The scalar used to alter the volume of the copied signal..

## Outputs

Out: Exec.
