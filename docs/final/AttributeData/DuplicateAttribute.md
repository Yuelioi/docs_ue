# DuplicateAttribute

用标识符复制了属性（曲线）。如果成功的话，广播一个 AnimDataModelNotifyType::AttributeAdded 通知。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18020279.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

属性标识符。Animation Attribute Identifier 结构（通过引用）。要复制的属性的标识符。

New Attribute Identifier（新属性标识）。Animation Attribute Identifier Structure (by ref)（动画属性标识符结构）。要添加的属性的标识符。

应该交易。布尔值。是否应该产生任何撤销-重做的变化。

## Outputs

输出。执行：执行。

返回值。布尔值。该属性是否被成功复制。

<hr>

Duplicated the attribute (curve) with the identifier. Broadcasts a EAnimDataModelNotifyType::AttributeAdded notify if successful.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18020279.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Attribute Identifier: Animation Attribute Identifier Structure (by ref). Identifier for the to-be-duplicated attribute.

New Attribute Identifier: Animation Attribute Identifier Structure (by ref). Identifier for the to-be-added attribute.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the attribute was successfully duplicated.
