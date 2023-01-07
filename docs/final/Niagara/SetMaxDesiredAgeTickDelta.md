# SetMaxDesiredAgeTickDelta

设置我们将模拟到期望年龄的最大 CPU 时间（秒），当我们超过这个限制时，刻度将在下一帧中处理。这只与使用 DesiredAge 年龄更新模式时有关。注意：如果我们有刻度线要处理，并且 SetCanRenderWhileSeeking 被设置为 "true"，那么这个组件就不会被看到了。

目标是 Niagara 粒子系统组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20133696.png)

## Inputs

在。执行。

目标。尼亚加拉粒子系统组件对象参考。

在最大时间。Float（单精度）。

## Outputs

出：执行。

<hr>

Sets the maximum CPU time in seconds we will simulate to the desired age, when we go beyond this limit ticks will be processed in the next frame.. This is only relevant when using the DesiredAge age update mode.. Note: The componet will not be visibile if we have ticks to process and SetCanRenderWhileSeeking is set to true

Target is Niagara Particle System Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20133696.png)

## Inputs

In: Exec.

Target: Niagara Particle System Component Object Reference.

In Max Time: Float (single-precision).

## Outputs

Out: Exec.
