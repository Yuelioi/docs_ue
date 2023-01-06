# PlayAnimationReverse

在这个小组件上播放相对于其当前状态的反向动画。你应该在以下情况下使用这个版本：比如说用户可以点击一个按钮，导致一个面板滑出，而你想逆转同样的动画，开始向相反的方向滑出。

目标是用户小工具

## 图示

![]($-20221218-21213284.png)

## Inputs

在。执行。

目标。用户小部件对象参考。

在动画中。小工具动画对象参考。要播放的动画。

播放速度。Float（单精度）。动画播放的速度。

复原状态。布尔值。当动画停止时，将小部件恢复到它们预先的动画状态。  

## Outputs

出：执行。

返回值。UMGSequence 播放器对象参考。

Plays an animation on this widget relative to it's current state in reverse. You should use this version in situations where. say a user can click a button and that causes a panel to slide out, and you want to reverse that same animation to begin sliding. in the opposite direction.

Target is User Widget

## 图示

![]($-20221218-21213284.png)

## Inputs

In: Exec.

Target: User Widget Object Reference.

In Animation: Widget Animation Object Reference. The animation to play.

Playback Speed: Float (single-precision). The speed at which the animation should play.

Restore State: Boolean. Restores widgets to their pre-animated state when the animation stops.  

## Outputs

Out: Exec.

Return Value: UMGSequence Player Object Reference.

