# SetHapticsbyValue

使用频率和振幅，直接为指定的手设置触觉值。注意：如果已经有一条曲线在为这只手播放，它将被取消，转而使用指定的值。

目标是玩家控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-19055422.png)

## Inputs

在。执行。

目标。玩家控制器对象参考。

频率。Float（单精度）。通过触觉系统播放的归一化频率[0.0, 1.0]。

振幅。浮点数（单精度）。归一化的振幅[0.0, 1.0]，用于设置触觉反馈。

手。EControllerHand Enum。用哪只手来发挥效果。

## Outputs

出：执行。

<hr>

Sets the value of the haptics for the specified hand directly, using frequency and amplitude. NOTE: If a curve is already. playing for this hand, it will be cancelled in favour of the specified values.

Target is Player Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-19055422.png)

## Inputs

In: Exec.

Target: Player Controller Object Reference.

Frequency: Float (single-precision). The normalized frequency [0.0, 1.0] to play through the haptics system.

Amplitude: Float (single-precision). The normalized amplitude [0.0, 1.0] to set the haptic feedback to.

Hand: EControllerHand Enum. Which hand to play the effect on.

## Outputs

Out: Exec.
