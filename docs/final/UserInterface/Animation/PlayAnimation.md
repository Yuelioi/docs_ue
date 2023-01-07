# PlayAnimation

在这个小组件中播放一个指定次数的动画

目标是用户小工具

## 图示

![](/uploads/projects/ue-bluprint/20221218-21213038.png)

## Inputs

在。执行。

目标。用户小部件对象参考。

在动画中。小工具动画对象参考。要播放的动画。

始于时间。Float（单精度）。动画中开始播放的时间，相对于起始位置。对于循环的动画，这只影响动画的第一次播放。

Num Loops to Play: 整数。循环播放该动画的次数（0 表示无限循环）。

播放模式。EUMGSequencePlayMode 枚举。指定播放模式。

播放速度。Float（单精度）。动画播放的速度。

复原状态。布尔值。当动画停止时，将小部件恢复到它们预先的动画状态。

## Outputs

出：执行。

返回值。UMGSequence 播放器对象参考。

<hr>

Plays an animation in this widget a specified number of times

Target is User Widget

## 图示

![](/uploads/projects/ue-bluprint/20221218-21213038.png)

## Inputs

In: Exec.

Target: User Widget Object Reference.

In Animation: Widget Animation Object Reference. The animation to play.

Start at Time: Float (single-precision). The time in the animation from which to start playing, relative to the start position. For looped animations, this will only affect the first playback of the animation..

Num Loops to Play: Integer. The number of times to loop this animation (0 to loop indefinitely).

Play Mode: EUMGSequencePlayMode Enum. Specifies the playback mode.

Playback Speed: Float (single-precision). The speed at which the animation should play.

Restore State: Boolean. Restores widgets to their pre-animated state when the animation stops.

## Outputs

Out: Exec.

Return Value: UMGSequence Player Object Reference.
