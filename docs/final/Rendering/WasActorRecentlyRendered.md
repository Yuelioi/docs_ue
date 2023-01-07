# WasActorRecentlyRendered

如果这个角色 "最近 "被渲染过，则返回 "true"，并以秒为单位定义 "最近 "的含义，例如：。如果使用 0.1 的公差，这个函数将只在该演员在游戏时间的最后 0.1 秒内被渲染时返回真。

目标是演员

## 图示

![](/uploads/projects/ue-bluprint/20221218-20403470.png)

## Inputs

目标。演员对象参考。

误差。浮点数（单精度）。演员最后一次渲染的时间是多少秒前，仍然可以算作 "最近 "渲染的时间。

## Outputs

返回值。布尔值。该演员是否最近被渲染过。

<hr>

Returns true if this actor has been rendered "recently", with a tolerance in seconds to define what "recent" means.. e.g.: If a tolerance of 0.1 is used, this function will return true only if the actor was rendered in the last 0.1 seconds of game time.

Target is Actor

## 图示

![](/uploads/projects/ue-bluprint/20221218-20403470.png)

## Inputs

Target: Actor Object Reference.

Tolerance: Float (single-precision). How many seconds ago the actor last render time can be and still count as having been "recently" rendered..

## Outputs

Return Value: Boolean. Whether this actor was recently rendered..
