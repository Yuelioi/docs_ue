# PlaySlotAnimationasDynamicMontag-_1

通过创建一个带有混合参数的动态的UAnimMontage，在槽节点上播放普通的动画资产。每个SlotGroup一次只能播放一个资产（无论是蒙太奇还是动画序列）。

目标是动画实例

## 图示

![]($-20221218-17502544.png)

## Inputs

在。执行。

目标。Anim Instance Object Reference.

资产: Anim Sequence Base Object Reference.

插槽节点名称: 名称.

Blend In: Alpha Blend Args结构（通过引用）。

Blend Out: Alpha Blend Args Structure (by ref).

In Play Rate（播放率）。Float (single-precision).

循环次数。整数。

Blend Out Trigger Time: Float (single-precision).

开始蒙太奇的时间。Float (single-precision).  

## Outputs

Out（输出）。Exec.

返回值。动画蒙太奇对象参考。通过创建一个动态的UAnimMontage与混合参数，在槽节点上播放普通的动画资产。每个槽组一次只能播放一个资产（无论是蒙太奇还是动画序列）。
