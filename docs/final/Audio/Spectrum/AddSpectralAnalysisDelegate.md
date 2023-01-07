# AddSpectralAnalysisDelegate

添加一个频谱分析委托，当这个子混音启用了频谱分析时，接收通知。

目标是声音子混音

## 图示

![](/uploads/projects/ue-bluprint/20221218-18080519.png)

## Inputs

在。Exec.

目标。Sound Submix 对象参考。

乐队设置中。阵列中的声音子混音频带分析设置结构。要分析的频带和它们的包络设置。

On Submix Spectral Analysis BP: 委托（通过参考）。当新的频谱数据可用时触发的事件。

更新率。Float（单精度）。从光谱分析器获取数据并广播事件的频率。最大是每秒 30 次。

分贝噪声底线。Float（单精度）。当使用分贝频谱类型时，将分贝噪声底线视为静音。

做正常化。布尔值。如果为真，输出频段值将在 0 和 1 之间归一。

做到自动范围。布尔值。如果是真的，输出频段的值将自动调整到音频中的最小和最大值。输出波段值将在零和一之间被归一化。

自动范围攻击时间。Float（单精度）。范围扩大到较大范围的 90%所需的时间（以秒为单位）。

自动范围释放时间。Float（单精度）。范围缩小到小范围的 90%所需的时间（以秒为单位）。

## Outputs

出来。执行。

<hr>

Adds a spectral analysis delegate to receive notifications when this submix has spectrum analysis enabled.

Target is Sound Submix

## 图示

![](/uploads/projects/ue-bluprint/20221218-18080519.png)

## Inputs

In: Exec.

Target: Sound Submix Object Reference.

In Band Settings: Array of Sound Submix Spectral Analysis Band Settings Structures. The frequency bands to analyze and their envelope-following settings..

On Submix Spectral Analysis BP: Delegate (by ref). Event to fire when new spectral data is available..

Update Rate: Float (single-precision). How often to retrieve the data from the spectral analyzer and broadcast the event. Max is 30 times per second..

Decibel Noise Floor: Float (single-precision). Decibel Noise Floor to consider as silence silence when using a Decibel Spectrum Type..

Do Normalize: Boolean. If true, output band values will be normalized between zero and one..

Do Auto Range: Boolean. If true, output band values will have their ranges automatically adjusted to the minimum and maximum values in the audio. Output band values will be normalized between zero and one..

Auto Range Attack Time: Float (single-precision). The time (in seconds) it takes for the range to expand to 90% of a larger range..

Auto Range Release Time: Float (single-precision). The time (in seconds) it takes for the range to shrink to 90% of a smaller range..

## Outputs

Out: Exec.
