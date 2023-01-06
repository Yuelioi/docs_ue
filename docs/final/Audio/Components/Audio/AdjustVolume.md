# AdjustVolume

这个功能允许设计者触发对声音实例的播放音量的调整，并可选择随着时间的推移平滑地应用一个曲线。

目标是音频组件

## 图示

![]($-20221218-18024936.png)

## Inputs

在。执行。

目标。音频组件对象参考。

调整音量持续时间。Float（单精度）。在初始音量和新音量之间进行插值的时间长度。

调整音量水平。Float（单精度）。设置音频组件的新音量。

渐变曲线。EAudioFaderCurve枚举。在新旧音量之间进行插值时使用的曲线。 

## Outputs

输出。Exec.

This function allows designers to trigger an adjustment to the sound instance?s playback Volume with options for smoothly applying a curve over time.

Target is Audio Component

## 图示

![]($-20221218-18024936.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.

Adjust Volume Duration: Float (single-precision). The length of time in which to interpolate between the initial volume and the new volume..

Adjust Volume Level: Float (single-precision). The new volume to set the Audio Component to..

Fade Curve: EAudioFaderCurve Enum. The curve used when interpolating between the old and new volume..  

## Outputs

Out: Exec.

