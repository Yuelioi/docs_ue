# SnapControlRig

执行抓取操作，将子节点抓取到父节点。

目标是Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18534082.png)

## Inputs

在。执行。

水平序列。水平序列对象参考。捕捉到的活动序列。

开始帧。帧号结构。啪啪啪的开始。

终端框架。框架编号结构。啪啪啪的结束。

孩子们要抓紧时间。控制钻机抢答器的选择结构（通过参考）。捕捉并获得键值的子对象。它们需要生活在关卡编辑器中的活动序列器中。

母体到扣子。控制钻机抢答器的选择结构（通过参考）。与之相对应的父对象。如果是动画，它需要在关卡编辑器的活动序列器中存在。

捕捉设置。控制钻机卡位设置对象参考。要使用的设置。

时间单位。ESequenceTimeUnit枚举。帧值的单位，可以是显示率，也可以是tick分辨率。

## Outputs

出：执行。

返回值。布尔值。
Peform a Snap operation to snap the children to the parent.

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18534082.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to snap.

Start Frame: Frame Number Structure. Beginning of the snap.

End Frame: Frame Number Structure. End of the snap.

Children to Snap: Control Rig Snapper Selection Structure (by ref). The children objects that snap and get keys set onto. They need to live in an active Sequencer in the level editor.

Parent to Snap: Control Rig Snapper Selection Structure (by ref). The parent object to snap relative to. If animated, it needs to live in an active Sequencer in the level editor.

Snap Settings: Control Rig Snap Settings Object Reference. Settings to use.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.  

## Outputs

Out: Exec.

Return Value: Boolean.

