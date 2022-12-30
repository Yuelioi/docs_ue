# AddCurve

将一条曲线添加到层次结构中

目标是Rig Hierarchy控制器

## 图示

![]($-20221218-21203051.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller对象参考。

在姓名。命名。新曲线的建议名称--最终会被命名空间所纠正。

在值。Float（单精度）。曲线要使用的值。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

打印Python命令。布尔值。如果设置为 "true"，相当于此调用的Python命令将被打印出来。  

## Outputs

出：执行。

返回值。Rig Element Key结构。新建曲线的密钥。
