# UpdateActorVisibility

更新所提供的演员在视窗中的可见性

目标是数据层编辑子系统

## 图示

![]($-20221218-18353085.png)

## Inputs

在。执行。

目标。数据层编辑子系统对象参考。

行为者。Actor对象参考。Actor to update.

通知选择变化。布尔值。如果为真，编辑器会被通知选择的变化；如果为假，编辑器将不会被通知。

重新绘制视口。布尔值。如果为真，将重新绘制视口；如果为假，将不重新绘制。 

## Outputs

输出。执行。

Out Selection Changed：布尔值。[OUT] 编辑器的选择是否改变。

Out Actor Modified: 布尔值。[Out] 演员是否被修改。

返回值。布尔值。
