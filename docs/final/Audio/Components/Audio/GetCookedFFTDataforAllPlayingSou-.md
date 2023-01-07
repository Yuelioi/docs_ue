# GetCookedFFTDataforAllPlayingSou-

检索音频组件上播放的声音的当前时间熟的频谱数据。频谱数据不会被平均化或插值化。取而代之的是一个数据数组，其中包含所有播放中的声波的熟化数据被返回。如果有数据并且音频组件正在播放，则返回 true。

目标是音频组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18025742.png)

## Inputs

在。执行。

目标。音频组件对象参考。

## Outputs

输出。Exec.

Out Sound Wave Spectral Data: 每个声音结构的声波频谱数据阵列。

返回值。布尔值。检索音频组件上播放的声音的当前时间熟的频谱数据。频谱数据没有被平均化或插值。而是返回一个数据数组，其中包含所有播放的声波的熟数据。如果有数据并且音频组件正在播放，则返回真。

<hr>

Retrieves the current-time cooked spectral data of the sounds playing on the audio component.. Spectral data is not averaged or interpolated. Instead an array of data with all playing sound waves with cooked data is returned.. Returns true if there is data and the audio component is playing.

Target is Audio Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18025742.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.

## Outputs

Out: Exec.

Out Sound Wave Spectral Data: Array of Sound Wave Spectral Data Per Sound Structures.

Return Value: Boolean. Retrieves the current-time cooked spectral data of the sounds playing on the audio component.. Spectral data is not averaged or interpolated. Instead an array of data with all playing sound waves with cooked data is returned.. Returns true if there is data and the audio component is playing..
