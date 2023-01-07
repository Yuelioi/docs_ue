# RemoveAttribute_Message

如果发现一个属性，用提供的信息删除该属性。如果成功的话，广播一个 AnimDataModelNotifyType::AttributeRemoved 通知。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18021325.png)

## Inputs

在。执行。

目标。对象参考。

属性标识符。Animation Attribute Identifier 结构（通过 ref）。将被移除的属性的标识符。

应该交易。布尔值。是否应该产生任何撤销-重做的变化。

## Outputs

输出。执行：执行。

返回值。布尔值。该属性是否被成功删除。

<hr>

Removes an attribute, if found, with the provided information. Broadcasts a EAnimDataModelNotifyType::AttributeRemoved notify if successful.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18021325.png)

## Inputs

In: Exec.

Target: Object Reference.

Attribute Identifier: Animation Attribute Identifier Structure (by ref). Identifier for the to-be-removed attribute.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the attribute was successfully removed.
