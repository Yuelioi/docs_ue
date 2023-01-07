# RemoveAttributeKey_Message

从提供标识符的属性中删除一个单键。如果成功，广播一个 AnimDataModelNotifyType::AttributeChanged 通知。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18021209.png)

## Inputs

在。执行。

目标。对象参考。

属性标识符。Animation Attribute Identifier 结构（通过 ref）。要删除键的属性的标识符。

时间。Float（单精度）。要删除的键的时间。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。

## Outputs

输出。执行：执行。

返回值。布尔值。属性键是否被成功删除。

<hr>

Remove a single key from the attribute with provided identifier. Broadcasts a EAnimDataModelNotifyType::AttributeChanged notify if successful.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18021209.png)

## Inputs

In: Exec.

Target: Object Reference.

Attribute Identifier: Animation Attribute Identifier Structure (by ref). Identifier for the attribute from which the key is to be removed.

Time: Float (single-precision). Time of the key to be removed.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the attribute key was successfully removed.
