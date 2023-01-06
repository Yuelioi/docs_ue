# RemoveAllAttributesforBone

移除指定骨骼名称的所有属性，如果有的话。为每个移除的属性广播一个AnimDataModelNotifyType::AttributeRemoved通知。

目标是动画数据控制器

## 图示

![]($-20221218-18020643.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

骨骼名称。名称（通过引用）。要移除属性的骨骼的名称。

Should Transact: 布尔值。是否应该产生任何撤销-重做的改变。 

## Outputs

输出。执行：执行。

返回值。整数。删除属性的总数。

Removes all attributes for the specified bone name, if any. Broadcasts a EAnimDataModelNotifyType::AttributeRemoved notify for each removed attribute.

Target is Animation Data Controller

## 图示

![]($-20221218-18020643.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Bone Name: Name (by ref). Name of the bone to remove attributes for.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Integer. Total number of removes attributes.

