# GetMaxDesiredAgeTickDelta

获取我们将模拟到所需年龄的最大CPU时间（秒），当我们超过这个限制时，ticks将在下一帧中处理。这只在使用DesiredAge年龄更新模式时有意义。注意：如果我们有刻度线要处理，并且SetCanRenderWhileSeeking被设置为 "true"，那么这个组件就不会被看到了。

目标是Niagara粒子系统组件

## 图示

![]($-20221218-20120979.png)

## Inputs

目标。尼亚加拉粒子系统组件对象参考。  

## Outputs

返回值。Float（单精度）。获取我们将模拟到期望年龄的最大CPU时间（秒），当我们超过这个限制时，ticks将在下一帧中处理。这只在使用DesiredAge年龄更新模式时有意义。注意：如果我们有刻度线要处理，并且SetCanRenderWhileSeeking被设置为 "true"，那么这个组件就不会被看到。

Get the maximum CPU time in seconds we will simulate to the desired age, when we go beyond this limit ticks will be processed in the next frame.. This is only relevant when using the DesiredAge age update mode.. Note: The componet will not be visibile if we have ticks to process and SetCanRenderWhileSeeking is set to true

Target is Niagara Particle System Component

## 图示

![]($-20221218-20120979.png)

## Inputs

Target: Niagara Particle System Component Object Reference.  

## Outputs

Return Value: Float (single-precision). Get the maximum CPU time in seconds we will simulate to the desired age, when we go beyond this limit ticks will be processed in the next frame.. This is only relevant when using the DesiredAge age update mode.. Note: The componet will not be visibile if we have ticks to process and SetCanRenderWhileSeeking is set to true.

