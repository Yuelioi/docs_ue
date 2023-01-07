# SpawnVPTransientEditorTickableAc-

生成一个仅供编辑器使用的瞬态虚拟生产可勾选演员。注意：基于瞬时 AVPTransientEditorTickableActorBase 的演员将不会被保存在关卡中。注意：暂时性也意味着发生在它们身上的事务不会被复制到其他连接的多用户机器上。

目标是 VPUtilities 编辑器蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-21314218.png)

## Inputs

在。执行。

语境对象。对象参考。

演员类。VPTransient Editor Tickable Actor 基类参考。

地点：向量。向量。

旋转： 旋转器。

## Outputs

出：执行。

返回值。VPTransient Editor Tickable Actor 基础对象参考。生成一个仅供编辑器使用的瞬态虚拟生产可勾选演员。注意 基于瞬时 AVPTransientEditorTickableActorBase 的演员将不会被保存在关卡中。@注意 暂时性也意味着发生在它们身上的事务不会被复制到其他连接的多用户机器上。

<hr>

Spawn an editor-only transient virtual production tickable actor. Note: Actors based on the transient AVPTransientEditorTickableActorBase will NOT be saved in the level.. Note: Being transient also means that transactions happening on them will NOT be replicated on other connected multi-user machines

Target is VPUtilities Editor Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21314218.png)

## Inputs

In: Exec.

Context Object: Object Reference.

Actor Class: VPTransient Editor Tickable Actor Base Class Reference.

Location: Vector.

Rotation: Rotator.

## Outputs

Out: Exec.

Return Value: VPTransient Editor Tickable Actor Base Object Reference. Spawn an editor-only transient virtual production tickable actor. @note Actors based on the transient AVPTransientEditorTickableActorBase will NOT be saved in the level.. @note Being transient also means that transactions happening on them will NOT be replicated on other connected multi-user machines.
