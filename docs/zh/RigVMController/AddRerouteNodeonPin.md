# AddRerouteNodeonPin

在编辑器中的现有引脚上添加一个重路由节点。改道节点可以用来直观地改善数据流，它们不需要任何额外的内存，而且是纯粹的。

  1.这将导致一个NodeAdded修改事件。





目标是Rig VMController

## 图示

![]($-20221218-20421130.png)

## Inputs

在。执行。

目标。Rig VMController对象参考。

在销路：字符串。

作为输入。布尔值。

显示为完整节点。布尔值。

在位。矢量二维结构（按参考）。

在节点名称中。字符串。

设置撤销重做：布尔值。

打印Python命令。布尔值。  

## Outputs

出：执行。

返回值。Rig VMReroute Node对象参考。在编辑器Graph中的现有Pin上添加一个Reroute Node。Reroute Nodes可以用来从视觉上改善数据流，。它们不需要任何额外的内存，而且是纯粹的。这将导致一个NodeAdded修改事件。
