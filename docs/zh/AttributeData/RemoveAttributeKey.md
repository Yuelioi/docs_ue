# RemoveAttributeKey

从提供标识符的属性中删除一个单键。如果成功，广播一个AnimDataModelNotifyType::AttributeChanged通知。

目标是动画数据控制器

## 图示

![]($-20221218-18021098.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

属性标识符。Animation Attribute Identifier结构（通过引用）。要删除键的属性的标识符。

时间。Float（单精度）。要删除的键的时间。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

返回值。布尔值。属性键是否被成功删除。
