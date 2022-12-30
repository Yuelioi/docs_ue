# BreakAddNewSubobjectParams

添加一个节点，将'AddNewSubobjectParams'分解到其成员字段中。

## 图示

![]($-20221218-14304252.png)

## Inputs

Add New Subobject Params: 添加新的子对象参数结构（通过引用）。 

## Outputs

父手柄。子对象数据句柄结构。父句柄。

新类。对象类参考。新类：。将被添加的新子对象的类。

Blueprint Context。Blueprint Object Reference（蓝图对象参考）。Blueprint Context:.蓝图上下文。指向该子对象所在的蓝图上下文的指针。如果该指针为空，则假定该子对象被添加到一个实例中。

跳过标记蓝图已修改。布尔值。跳过标记蓝图已修改：。可选择跳过将此蓝图标记为已修改（例如，如果我们在外部处理。

符合父级转换：布尔值。符合父类的转换：。新创建的组件是否应保持其变换，或使其符合其父体。
