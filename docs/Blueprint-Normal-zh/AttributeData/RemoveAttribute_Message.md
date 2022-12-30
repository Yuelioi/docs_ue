# RemoveAttribute_Message

如果发现一个属性，用提供的信息删除该属性。如果成功的话，广播一个AnimDataModelNotifyType::AttributeRemoved通知。

目标是动画数据控制器

## 图示

![]($-20221218-18021325.png)

## Inputs

在。执行。

目标。对象参考。

属性标识符。Animation Attribute Identifier结构（通过ref）。将被移除的属性的标识符。

应该交易。布尔值。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

返回值。布尔值。该属性是否被成功删除。
