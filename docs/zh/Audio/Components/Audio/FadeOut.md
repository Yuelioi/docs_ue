# FadeOut

这个函数允许设计者在一个音频组件实例上调用一个延迟的停止，同时应用一个随时间变化的音量曲线。参数允许设计者指示淡出的持续时间和曲线的形状。

目标是音频组件

## 图示

![]($-20221218-18025176.png)

## Inputs

在。执行。

目标。音频组件对象参考。

Fade Out Duration（淡出时间）。Float（单精度）。达到FadeVolumeLevel应该花多长时间。

渐变音量水平。Float（单精度）。AudioComponents的计算音量的百分比，以淡出至此。

渐变曲线。EAudioFaderCurve枚举。在新旧音量之间进行插值时使用的曲线。 

## Outputs

输出。Exec.
