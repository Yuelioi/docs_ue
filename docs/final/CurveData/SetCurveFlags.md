# SetCurveFlags

用提供的标识符替换曲线的标志。如果成功的话，广播一个AnimDataModelNotifyType::CurveFlagsChanged通知。

目标是动画数据控制器。

## 图示

![]($-20221218-18334877.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

曲线标识。Animation Curve Identifier结构（通过引用）。要设置标志状态的曲线的标识符。

Flags（标志）。整数。旗帜掩码，用它来替换现有的旗帜。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

返回值。布尔值。是否成功设置了标志掩码。

Replace the flags for the curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveFlagsChanged notify if successful.

Target is Animation Data Controller

## 图示

![]($-20221218-18334877.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the curve for which the flag state is to be set.

Flags: Integer. Flag mask with which the existings flags are to be replaced.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the flag mask was successfully set.

