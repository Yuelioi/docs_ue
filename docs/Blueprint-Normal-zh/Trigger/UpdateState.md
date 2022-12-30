# UpdateState

这个函数检查是否满足了触发器的必要条件。返回 触发器状态 无 - 没有满足触发条件。触发器是不活动的。Trigger State Ongoing - 某些触发条件已被满足。触发器正在处理但尚未激活。Trigger State Triggered（触发状态） - 所有的触发条件都已经满足，可以启动。触发器是活动的。

目标是输入触发器

## 图示

![]($-20221218-21155758.png)

## Inputs

在。执行。

目标：输入触发对象参考。

玩家输入。增强的玩家输入对象参考。

修改后的值。输入行动值结构。

三角洲时间。浮点数（单精度）。  

## Outputs

出：执行。

返回值。ETriggerState Enum.这个函数检查是否满足了触发器的必要条件。返回 触发状态 None - 没有满足触发条件。触发器是不活动的。Trigger State Ongoing - 某些触发条件已被满足。触发器正在处理但尚未激活。Trigger State Triggered（触发状态） - 所有触发条件都已满足，可以启动。Trigger is active...（触发器已激活）。
