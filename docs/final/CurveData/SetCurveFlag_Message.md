# SetCurveFlag_Message

为提供标识符的曲线设置一个单独的标志。如果成功的话，广播一个AnimDataModelNotifyType::CurveFlagsChanged通知。

目标是动画数据控制器

## 图示

![]($-20221218-18335125.png)

## Inputs

在。执行。

目标。对象参考。

曲线标识。Animation Curve Identifier结构（通过ref）。要设置标志状态的曲线的标识符。

Flag: EAnimAssetCurveFlags枚举。要设置的状态的标志。

状态。布尔型。要设置的标志的状态，true=设置/false=未设置。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

返回值。布尔值。标志状态是否被成功设置。

Set an individual flag for the curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveFlagsChanged notify if successful.

Target is Animation Data Controller

## 图示

![]($-20221218-18335125.png)

## Inputs

In: Exec.

Target: Object Reference.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the curve for which the flag state is to be set.

Flag: EAnimAssetCurveFlags Enum. Flag for which the state is supposed to be set.

State: Boolean. State of the flag to be, true=set/false=not set.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the flag state was successfully set.

