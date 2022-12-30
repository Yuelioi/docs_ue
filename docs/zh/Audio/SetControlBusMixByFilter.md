# SetControlBusMixByFilter

将一个给定类别的过滤阶段设定为mix的活动实例的目标值。不更新混合的UObject定义。

目标是音频调制静态

## 图示

![]($-20221218-18074297.png)

## Inputs

在。执行。

混合。声音控制总线混合对象参考。要修改的混音。

地址过滤器。字符串。(可选）应用于所提供的混音阶段的地址过滤器。

Param Class Filter（参数类过滤器）。声音调制参数类参考。(可选）按参数类别过滤总线。

Param Filter（参数过滤器）。Sound Modulation Parameter Object 参考。(可选）按参数过滤总线。

值。Float（单精度）。混合过滤阶段的目标值。

衰减时间。Float（单精度）。如果是非负数，更新发现的符合所提供的滤波器的总线级的淡出时间。 

## Outputs

输出。执行。
