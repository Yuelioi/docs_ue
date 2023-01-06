# MakePresetSpectralAnalysisBandSe-

制作一个横跨给定的EAudioSpectrumBandPresetType的频率范围的频段阵列。

目标是音频混合器蓝图库

## 图示

![]($-20221218-18022587.png)

## Inputs

在波段预设类型中。EAudioSpectrumBandPresetType枚举。带子所包含的音频内容类型。

In Num Bands: 整数。用来表示频谱的频带数量。

在攻击时间Msec。整数。应用于每个波段的包络跟踪器的攻击时间（以毫秒为单位）。

在释放时间Msec: 整数。应用于每个波段的包络跟踪器的释放时间（以毫秒为单位）。 

## Outputs

返回值。声音子混音谱分析频段设置结构的数组。

Make an array of bands which span the frequency range of a given EAudioSpectrumBandPresetType.

Target is Audio Mixer Blueprint Library

## 图示

![]($-20221218-18022587.png)

## Inputs

In Band Preset Type: EAudioSpectrumBandPresetType Enum. The type audio content which the bands encompass..

In Num Bands: Integer. The number of bands used to represent the spectrum..

In Attack Time Msec: Integer. The attack time (in milliseconds) to apply to each band's envelope tracker..

In Release Time Msec: Integer. The release time (in milliseconds) to apply to each band's envelope tracker..  

## Outputs

Return Value: Array of Sound Submix Spectral Analysis Band Settings Structures.

