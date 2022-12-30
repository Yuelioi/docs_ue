# MakeReparentSubobjectParams

添加一个节点，从其成员中创建一个'ReparentSubobjectParams'。

## 图示

![]($-20221218-15000157.png)

## Inputs

新的父处理程序。子对象数据处理结构。新父对象句柄：。子对象的句柄，以重新parent到。

蓝图语境。蓝图对象参考。Blueprint Context:.指向该子对象所在的蓝图上下文的指针。如果该指针为空，则假定该子对象被添加到一个实例中。

行为者预览语境。演员对象参考。Actor Preview Context:.如果在蓝图上下文中，要使用的预览演员上下文。如果需要BlueprintContext的话，这个必须有一个值。  

## Outputs

上位子对象参数。上位子对象参数结构。
