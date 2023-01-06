# GetCookedAmplitudeEnvelopeData

检索当前播放时间的熟化振幅包络数据。如果有多个。声波在播放，数据会在所有播放的声波中进行内插并取平均值。如果没有找到数据，返回FALSE。

目标是音频组件

## 图示

![]($-20221218-18025520.png)

## Inputs

在。执行。

目标。音频组件对象参考。 

## Outputs

输出。Exec.

输出包络数据。Float (single-precision).

返回值。布尔值。检索当前播放时间的熟化振幅包络数据。如果有多个。播放的声波，数据将在所有播放的声波中进行内插和平均。如果没有找到数据，则返回FALSE。

Retrieves Cooked Amplitude Envelope Data at the current playback time. If there are multiple. SoundWaves playing, data is interpolated and averaged across all playing sound waves.. Returns FALSE if no data was found.

Target is Audio Component

## 图示

![]($-20221218-18025520.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.  

## Outputs

Out: Exec.

Out Envelope Data: Float (single-precision).

Return Value: Boolean. Retrieves Cooked Amplitude Envelope Data at the current playback time. If there are multiple. SoundWaves playing, data is interpolated and averaged across all playing sound waves.. Returns FALSE if no data was found..

