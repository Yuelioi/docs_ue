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
Bake the current animation in the binding to a Control Rig track

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18521807.png)

## Inputs

In: Exec.

World: World Object Reference. The active world.

Level Sequence: Level Sequence Object Reference. The LevelSequence we are baking.

Control Rig Class: Object Class Reference. The class of the Control Rig.

Export Options: Anim Seq Export Option Object Reference. Export options for creating an animation sequence.

Reduce Keys: Boolean.

Tolerance: Float (single-precision). If reducing keys, tolerance about which keys will be removed, smaller tolerance, more keys usually..

Binding: Sequencer Binding Proxy Structure (by ref). The binding upon which to bake.  

## Outputs

Out: Exec.

Return Value: Boolean. returns True if successful, False otherwise.

