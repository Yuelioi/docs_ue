# RenameControlRig-

将序列器中的控制装置通道重命名为指定的新控制名称，这些名称应该出现在控制装置上。

目标是Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18530843.png)

## Inputs

在。执行。

目标。Control Rig Sequencer Editor Library对象参考。

在序列中。水平序列对象参考。序列重命名控件。

在控制钻机中。Control Rig Object Reference.ControlRig来重命名控件。

在旧控制名。阵列的名称。要改变的旧控制Rig控制通道的名称。将被InNewControlNames数组中的相应名称所取代。

在新的控制名称中。名称的数组。新控制钻机通道的名称。

## Outputs

出：执行。

返回值。布尔值。如果函数成功，则返回true；如果不成功，则返回false，这可能发生在名称数组大小不匹配或任何新的控制名称无效的情况下。