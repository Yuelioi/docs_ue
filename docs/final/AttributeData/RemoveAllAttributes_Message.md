# RemoveAllAttributes_Message

移除所有存储的属性。为每个被移除的属性广播一个 EAnimDataModelNotifyType::AttributeRemoved 通知。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18020871.png)

## Inputs

在。执行。

目标。对象参考。

应该交易。布尔型。是否应该产生任何撤销-重做的改变。

## Outputs

输出。执行：执行。

返回值。整数。删除属性的总数。

<hr>

Removes all stored attributes. Broadcasts a EAnimDataModelNotifyType::AttributeRemoved notify for each removed attribute.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18020871.png)

## Inputs

In: Exec.

Target: Object Reference.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Integer. Total number of removes attributes.
