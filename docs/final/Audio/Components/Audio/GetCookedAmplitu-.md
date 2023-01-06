# GetCookedAmplitu-

检索音频组件上播放的声音的当前时间振幅包络数据。包络数据不会被平均化或插值。取而代之的是一个数据数组，其中包含所有正在播放的带有熟化数据的声波被返回。如果有数据并且音频组件正在播放，则返回真。

目标是音频组件

## 图示

![]($-20221218-18025403.png)

## Inputs

在。执行。

目标。音频组件对象参考。 

## Outputs

输出。Exec.

Out Envelope Data: 每个声音结构的声波包络数据阵列。

返回值。布尔值。检索音频组件上播放的声音的当前时间振幅包络数据。包络数据没有被平均化或插值。而是返回一个数据数组，其中有所有播放的声波的熟数据。如果有数据并且音频组件正在播放，则返回真。

Retrieves the current-time amplitude envelope data of the sounds playing on the audio component.. Envelope data is not averaged or interpolated. Instead an array of data with all playing sound waves with cooked data is returned.. Returns true if there is data and the audio component is playing.

Target is Audio Component

## 图示

![]($-20221218-18025403.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.  

## Outputs

Out: Exec.

Out Envelope Data: Array of Sound Wave Envelope Data Per Sound Structures.

Return Value: Boolean. Retrieves the current-time amplitude envelope data of the sounds playing on the audio component.. Envelope data is not averaged or interpolated. Instead an array of data with all playing sound waves with cooked data is returned.. Returns true if there is data and the audio component is playing..

