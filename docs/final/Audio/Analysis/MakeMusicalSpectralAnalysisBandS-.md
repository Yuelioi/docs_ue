# MakeMusicalSpectralAnalysisBandS-

制作一个频率递增的音乐间隔带阵列。

目标是音频混合器蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18022477.png)

## Inputs

在 Num Semitones。整数。表示半音的数量。

In Starting Musical Note: EMusicalNoteName Enum.

在开始的八度音。整数。数组中第一个音符的八度音。

在攻击时间 Msec: 整数。应用于每个乐队的包络跟踪器的攻击时间（以毫秒为单位）。

在释放时间 Msec: 整数。应用于每个波段的包络跟踪器的释放时间（以毫秒为单位）。

## Outputs

返回值。声音子混音谱分析频段设置结构的数组。

<hr>

Make an array of musically spaced bands with ascending frequency.

Target is Audio Mixer Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18022477.png)

## Inputs

In Num Semitones: Integer. The number of semitones to represent..

In Starting Musical Note: EMusicalNoteName Enum.

In Starting Octave: Integer. The octave of the first note in the array..

In Attack Time Msec: Integer. The attack time (in milliseconds) to apply to each band's envelope tracker..

In Release Time Msec: Integer. The release time (in milliseconds) to apply to each band's envelope tracker..

## Outputs

Return Value: Array of Sound Submix Spectral Analysis Band Settings Structures.
