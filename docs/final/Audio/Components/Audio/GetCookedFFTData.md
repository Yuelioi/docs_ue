# GetCookedFFTData

检索音频组件上播放的声音的当前时间的熟谱数据。频谱数据是对该音频组件上所有播放的声音进行平均和插值的。如果有数据并且音频组件正在播放，则返回真。

目标是音频组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18025628.png)

## Inputs

在。执行。

目标。音频组件对象参考。

要获取的频率。Float (single-precision)s 数组。

## Outputs

输出。执行。

Out Sound Wave Spectral Data: 声波频谱数据结构的数组。

返回值。布尔值。检索音频组件上播放的声音的当前时间熟的频谱数据。频谱数据是对这个音频组件上所有播放的声音进行平均和插值的。如果有数据并且音频组件正在播放，则返回真。

<hr>

Retrieves the current-time cooked spectral data of the sounds playing on the audio component.. Spectral data is averaged and interpolated for all playing sounds on this audio component.. Returns true if there is data and the audio component is playing.

Target is Audio Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18025628.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.

Frequencies to Get: Array of Float (single-precision)s.

## Outputs

Out: Exec.

Out Sound Wave Spectral Data: Array of Sound Wave Spectral Data Structures.

Return Value: Boolean. Retrieves the current-time cooked spectral data of the sounds playing on the audio component.. Spectral data is averaged and interpolated for all playing sounds on this audio component.. Returns true if there is data and the audio component is playing..
