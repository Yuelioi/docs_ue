# SpawnVPEditorTickableActor

生成一个仅供编辑器使用的虚拟生产可勾选演员。注意：基于非瞬时的AVPEditorTickableActorBase的演员将被保存在级别中。注意：非瞬时性也意味着发生在它们身上的事务将被复制到其他连接的多用户机器上。

目标是VPUtilities编辑器蓝图库

## 图示

![]($-20221218-21313982.png)

## Inputs

在。执行。

语境对象。对象参考。

角色类。VPEditor Tickable Actor基类参考。

地点：向量。向量。

旋转： 旋转器。  

## Outputs

出：执行。

返回值。VPEditor Tickable Actor 基本对象参考。生成一个仅供编辑器使用的虚拟生产可勾选演员。@注 基于非瞬时的AVPEditorTickableActorBase的演员将被保存在关卡中。@注 作为非暂存器也意味着发生在它们身上的事务将被复制到其他连接的多用户机器上。

Spawn an editor-only virtual production tickable actor. Note: Actors based on the non-transient AVPEditorTickableActorBase will be saved in the level.. Note: Being non-transient also means that transactions happening on them will be replicated on other connected multi-user machines

Target is VPUtilities Editor Blueprint Library

## 图示

![]($-20221218-21313982.png)

## Inputs

In: Exec.

Context Object: Object Reference.

Actor Class: VPEditor Tickable Actor Base Class Reference.

Location: Vector.

Rotation: Rotator.  

## Outputs

Out: Exec.

Return Value: VPEditor Tickable Actor Base Object Reference. Spawn an editor-only virtual production tickable actor. @note Actors based on the non-transient AVPEditorTickableActorBase will be saved in the level.. @note Being non-transient also means that transactions happening on them will be replicated on other connected multi-user machines.

