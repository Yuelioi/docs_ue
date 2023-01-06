# PlaySlotAnimationasDynamicMontag-_2

通过创建一个动态的UAnimMontage与混合设置，在插槽节点上播放正常的动画资产。每个槽组一次只能播放一个资产（无论是蒙太奇还是动画序列）。

目标是动画实例

## 图示

![]($-20221218-17502661.png)

## Inputs

在。执行。

目标。Anim Instance Object Reference.

资产: Anim Sequence Base Object Reference.

插槽节点名称: 名称.

Blend in Settings: 蒙太奇混合设置结构（通过引用）。

Blend Out Settings: 蒙太奇混合设置结构（由参考文献）。

In Play Rate（播放率）。Float (single-precision).

循环次数。整数。

Blend Out Trigger Time: Float (single-precision).

开始蒙太奇的时间。Float (single-precision).  

## Outputs

Out（输出）。Exec.

返回值。动画蒙太奇对象参考。通过创建一个动态的UAnimMontage与混合设置，在槽节点上播放普通的动画资产。每个槽组一次只能播放一个资产（无论是蒙太奇还是动画序列）。

Play normal animation asset on the slot node by creating a dynamic UAnimMontage with blend in settings. You can only play one asset (whether montage or animsequence) at a time per SlotGroup.

Target is Anim Instance

## 图示

![]($-20221218-17502661.png)

## Inputs

In: Exec.

Target: Anim Instance Object Reference.

Asset: Anim Sequence Base Object Reference.

Slot Node Name: Name.

Blend in Settings: Montage Blend Settings Structure (by ref).

Blend Out Settings: Montage Blend Settings Structure (by ref).

In Play Rate: Float (single-precision).

Loop Count: Integer.

Blend Out Trigger Time: Float (single-precision).

In Time to Start Montage At: Float (single-precision).  

## Outputs

Out: Exec.

Return Value: Anim Montage Object Reference. Play normal animation asset on the slot node by creating a dynamic UAnimMontage with blend in settings. You can only play one asset (whether montage or animsequence) at a time per SlotGroup..

