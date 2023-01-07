# StartAnalyzingOutput

开始对音频输出进行频谱分析。把 Submix To Analyze（子混音）留空，就可以分析游戏的主输出了。

目标是音频混合器蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18022698.png)

## Inputs

在。执行。

Submix to Analyze: Sound Submix Object Reference.

FFTSize。EFFTSize Enum.

插值方法。EFFTPeakInterpolationMethod Enum.

窗口类型。EFFTWindowType 枚举。

合尺寸。Float（单精度）。

频谱类型。EAudioSpectrumType 枚举。

## Outputs

输出。执行：执行。

<hr>

Start spectrum analysis of the audio output. By leaving the Submix To Analyze blank, you can analyze the master output of the game.

Target is Audio Mixer Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18022698.png)

## Inputs

In: Exec.

Submix to Analyze: Sound Submix Object Reference.

FFTSize: EFFTSize Enum.

Interpolation Method: EFFTPeakInterpolationMethod Enum.

Window Type: EFFTWindowType Enum.

Hop Size: Float (single-precision).

Spectrum Type: EAudioSpectrumType Enum.

## Outputs

Out: Exec.
