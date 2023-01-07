# PlayQuantized

在一个给定的量化边界上，用现有时钟的句柄开始在音频组件上播放声音。

目标是音频组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18030529.png)

## Inputs

在。执行。

目标。音频组件对象参考。

在时钟手柄。石英时钟手柄对象参考（通过参考）。

Quantization Boundary（量化边界）中。石英量化边界结构（通过引用）。

在 Delegate 中。Delegate（通过引用）。

在开始时间。浮点数（单精度）。

淡入时间。Float（单精度）。

在淡入音量水平。Float（单精度）。

渐变曲线。EAudioFaderCurve Enum。

## Outputs

输出。Exec.

<hr>

Start a sound playing on an audio component on a given quantization boundary with the handle to an existing clock

Target is Audio Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18030529.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.

In Clock Handle: Quartz Clock Handle Object Reference (by ref).

In Quantization Boundary: Quartz Quantization Boundary Structure (by ref).

In Delegate: Delegate (by ref).

In Start Time: Float (single-precision).

In Fade in Duration: Float (single-precision).

In Fade Volume Level: Float (single-precision).

In Fade Curve: EAudioFaderCurve Enum.

## Outputs

Out: Exec.
