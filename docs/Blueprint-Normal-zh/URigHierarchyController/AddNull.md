# AddNull

将一个空添加到层次结构中

目标是Rig Hierarchy控制器

## 图示

![]($-20221218-21203159.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller对象参考。

在姓名。名称。新空的建议名称--最终将由命名空间来纠正。

在父母。Rig Element Key Structure.新null的（可选）父级。如果你不需要一个父级，请传递FRigElementKey()。

在转型。变换。新的空值的变换--在本地或全局空值中，基于bTransformInGlobal。

Transform in Global：布尔值。如果传递的Transform以全局null表示，则将此设置为true，如果以局部null表示，则设置为false。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

打印Python命令。布尔值。如果设置为 "true"，相当于此调用的Python命令将被打印出来。  

## Outputs

出：执行。

返回值。Rig Element Key结构。新创建的空元素的密钥。
