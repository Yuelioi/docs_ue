# SetCurveColor

用提供的标识符改变曲线的颜色。如果成功的话，会广播一个 EAnimDataModelNotifyType::CurveRenamed 的通知。目前只支持浮动曲线的颜色改变。

目标是动画数据控制器

## 图示

![]($-20221218-18334529.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

曲线标识。Animation Curve Identifier结构（通过引用）。要改变颜色的曲线的标识符。

Color：线性颜色结构。曲线要设置的颜色。

Should Transact。布尔值。是否应该产生任何撤销-重做的改变。 

## Outputs

输出。执行。

返回值。布尔值。曲线颜色是否被成功改变。

Changes the color of the curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveRenamed notify if successful.. Currently changing curve colors is only supported for float curves.

Target is Animation Data Controller

## 图示

![]($-20221218-18334529.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier of the curve to change the color for.

Color: Linear Color Structure. Color to which the curve is to be set.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the curve color was successfully changed.

