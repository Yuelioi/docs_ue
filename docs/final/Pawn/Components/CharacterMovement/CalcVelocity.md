# CalcVelocity

根据当前状态更新速度和加速度，应用摩擦和加速或减速的效果。不应用重力。这是在运动更新时内部使用的。通常情况下，你不需要从外部代码中调用这个，但是你可能想在自定义运动模式中使用它。

目标是角色运动组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20180496.png)

## Inputs

在。执行。

目标。角色运动组件对象参考。

Delta 时间。Float (single-precision). 自上一帧起经过的时间。

摩擦力。浮动（单精度）。不加速时的摩擦系数，或在与加速相反的方向。

流体。布尔值。如果在流体中移动，则为真，导致摩擦力总是被应用，而不管加速度如何。

刹车减速。Float (single-precision). 当不加速时或超过最大速度时应用减速。

## Outputs

出：执行。

<hr>

Updates Velocity and Acceleration based on the current state, applying the effects of friction and acceleration or deceleration. Does not apply gravity.. This is used internally during movement updates. Normally you don't need to call this from outside code, but you might want to use it for custom movement modes.

Target is Character Movement Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20180496.png)

## Inputs

In: Exec.

Target: Character Movement Component Object Reference.

Delta Time: Float (single-precision). time elapsed since last frame..

Friction: Float (single-precision). coefficient of friction when not accelerating, or in the direction opposite acceleration..

Fluid: Boolean. true if moving through a fluid, causing Friction to always be applied regardless of acceleration..

Braking Deceleration: Float (single-precision). deceleration applied when not accelerating, or when exceeding max velocity..

## Outputs

Out: Exec.
