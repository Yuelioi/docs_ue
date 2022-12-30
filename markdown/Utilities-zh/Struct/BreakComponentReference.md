# BreakComponentReference

添加一个节点，将'ComponentReference'分解成其成员字段

## 图示

![]($-20221218-14324373.png)

## Inputs

组件参考。组件参考结构（通过参考）。 

## Outputs

Referenced Actor: Actor对象参考。Other Actor:. 指向拥有该组件的另一个角色的指针。如果没有提供这一点，则引用指的是这个/同一个角色上的一个组件。

组件名称。名称。组件属性：。要使用的组件的名称。如果没有指定，则引用指的是根组件。
