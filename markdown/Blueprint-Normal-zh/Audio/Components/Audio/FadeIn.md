# FadeIn

这个函数允许设计者在一个音频组件实例上调用播放，同时应用一个随时间变化的音量曲线。参数允许设计者指示渐变的持续时间、曲线形状和开始时间（如果在声音中寻求）。

目标是音频组件

## 图示

![]($-20221218-18025067.png)

## Inputs

在。执行。

目标。音频组件对象参考。

淡入时间。Float（单精度）。达到FadeVolumeLevel应该花多长时间。

渐变音量水平。Float（单精度）。渐变到AudioComponents的计算音量的百分比。

开始时间。Float（单精度）。

渐变曲线。EAudioFaderCurve枚举。在新旧音量之间插值时要使用的曲线。 

## Outputs

输出。Exec.
