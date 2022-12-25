# BaketoControlRig

将当前的动画绑定到一个控制钻机轨道上

目标是Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18521807.png)

## Inputs

在。执行。

世界。世界对象参考。活跃的世界。

水平序列。Level Sequence对象参考。我们正在烘焙的LevelSequence。

控制钻机类。对象类别参考。控制装置的类别。

输出选项。Anim Seq Export Option Object Reference.用于创建动画序列的导出选项。

减少键。布尔型。

误差。浮点数（单精度）。如果减少键，关于哪些键将被删除的公差，较小的公差，通常有更多的键。

绑定。序列器绑定代理结构（通过引用）。在此基础上烘托出的结合。

## Outputs

出：执行。

返回值。布尔值。如果成功，返回True，否则返回False。