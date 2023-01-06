# SetCurveKeys_Message

用提供的标识符和名称替换曲线的键。如果成功的话，广播一个AnimDataModelNotifyType::CurveChanged通知。

目标是动画数据控制器

## 图示

![]($-20221218-18335477.png)

## Inputs

在。执行。

目标。对象参考。

曲线标识。Animation Curve Identifier结构（通过ref）。要替换键值的曲线的标识符。

曲线键。丰富的曲线按键结构的数组。用来替换现有键值的键值。

Should Transact: 布尔型。是否应该生成任何撤销-重做的修改。 

## Outputs

输出。执行：执行。

返回值。布尔值。替换曲线键是否成功。

Replace the keys for the curve with provided identifier and name. Broadcasts a EAnimDataModelNotifyType::CurveChanged notify if successful.

Target is Animation Data Controller

## 图示

![]($-20221218-18335477.png)

## Inputs

In: Exec.

Target: Object Reference.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the curve for which the keys are to be replaced.

Curve Keys: Array of Rich Curve Key Structures. Keys with which the existing keys are to be replaced.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not replacing curve keys was successful.

