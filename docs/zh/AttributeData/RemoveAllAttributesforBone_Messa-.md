# RemoveAllAttributesforBone_Messa-

移除指定骨骼名称的所有属性（如果有）。为每个被移除的属性广播一个 EAnimDataModelNotifyType::AttributeRemoved 通知。

目标是动画数据控制器

## 图示

![]($-20221218-18020752.png)

## Inputs

在。执行。

目标。对象参考。

骨骼名称。名称（通过引用）。要删除属性的骨的名称。

Should Transact: 布尔值。是否应该产生任何撤销-重做的改变。 

## Outputs

输出。执行：执行。

返回值。整数。删除属性的总数。
