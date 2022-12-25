# RemoveAllAttributes

移除所有存储的属性。为每个被移除的属性广播一个 EAnimDataModelNotifyType::AttributeRemoved 通知。

目标是动画数据控制器

## 图示

![]($-20221218-18020530.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

应该交易。布尔值。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

返回值。整数。删除属性的总数。
