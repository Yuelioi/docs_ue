# AddImpulse

为字符添加脉冲。脉冲在每次打勾时都会累积，并一起应用。所以多次调用这个函数会累积。脉冲是一个瞬间的力，通常应用一次。如果你想在每一帧持续地应用.力，请使用AddForce().。注意，像这样改变角色的动量可以改变运动模式。

目标是角色运动组件

## 图示

![]($-20221218-20180380.png)

## Inputs

在。执行。

目标。角色运动组件对象参考。

脉冲：矢量。脉冲的应用...

速度变化。布尔型。脉冲是否是相对于质量的。

## Outputs

出：执行。

Add impulse to character. Impulses are accumulated each tick and applied together. so multiple calls to this function will accumulate.. An impulse is an instantaneous force, usually applied once. If you want to continually apply. forces each frame, use AddForce().. Note that changing the momentum of characters like this can change the movement mode.

Target is Character Movement Component

## 图示

![]($-20221218-20180380.png)

## Inputs

In: Exec.

Target: Character Movement Component Object Reference.

Impulse: Vector. Impulse to apply..

Velocity Change: Boolean. Whether or not the impulse is relative to mass..  

## Outputs

Out: Exec.

