# RemoveCurve_Message

移除提供标识符的曲线。如果成功的话，广播一个AnimDataModelNotifyType::CurveRemoved通知。

目标是动画数据控制器

## 图示

![]($-20221218-18333691.png)

## Inputs

在。执行。

目标。对象参考。

曲线标识。动画曲线标识符结构（通过参考）。

Should Transact: 布尔值。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

返回值。布尔值。曲线是否被成功删除。
