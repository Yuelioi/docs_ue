# ImportBones

将一个现有的骨架导入到层次结构中。

目标是Rig Hierarchy控制器

## 图示

![]($-20221218-21204444.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller对象参考。

在Skeleton中。骨架对象参考。要导入的骨架。

在名称空间。名称。在骨骼名称前加上名称空间。

替换现有的骨骼。布尔值。如果为真，现有骨骼将被移除。

移除过期的骨头。布尔值。如果为真，在骨架中不存在的骨骼将被从层次结构中移除。

选择骨骼。布尔值。如果为真，骨骼将在导入时被选中。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

打印Python命令。布尔值。如果设置为 "true"，相当于此调用的Python命令将被打印出来。  

## Outputs

出：执行。

返回值。Rig元素键结构的数组。输入的元素的键。
