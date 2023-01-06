# MakeFullSpectrumSpectralAnalysis-

做一个对数间隔的带子阵列。

目标是音频混合器蓝图库

## 图示

![]($-20221218-18022365.png)

## Inputs

在Num Bands。整数。用来表示频谱的带子数量。

在最小频率中。Float（单精度）。第一个频段的中心频率。

在最大频率。浮点数（单精度）。最后一个频段的中心频率。

在攻击时间Msec。整数。应用于每个波段的包络跟踪器的攻击时间（以毫秒为单位）。

在释放时间Msec: 整数。应用于每个波段的包络跟踪器的释放时间（以毫秒为单位）。 

## Outputs

返回值。声音子混音谱分析频段设置结构的数组。

Make an array of logarithmically spaced bands.

Target is Audio Mixer Blueprint Library

## 图示

![]($-20221218-18022365.png)

## Inputs

In Num Bands: Integer. The number of bands to used to represent the spectrum..

In Minimum Frequency: Float (single-precision). The center frequency of the first band..

In Maximum Frequency: Float (single-precision). The center frequency of the last band..

In Attack Time Msec: Integer. The attack time (in milliseconds) to apply to each band's envelope tracker..

In Release Time Msec: Integer. The release time (in milliseconds) to apply to each band's envelope tracker..  

## Outputs

Return Value: Array of Sound Submix Spectral Analysis Band Settings Structures.

