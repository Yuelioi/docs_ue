# RemoveActorsfromDataLayer

从指定的数据层中删除演员。

目标是数据层编辑子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-18350965.png)

## Inputs

在。执行。

目标。数据层编辑子系统对象参考。

行为者。演员对象引用的数组。要从提供的数据层中删除的角色。

数据层。数据层对象参考。

## Outputs

输出。执行。

返回值。布尔值。如果至少有一个角色被从 DataLayer 中移除，则为真。如果所有的角色都已经属于 DataLayer，则返回假。

<hr>

Removes the actors from the specified DataLayer.

Target is Data Layer Editor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18350965.png)

## Inputs

In: Exec.

Target: Data Layer Editor Subsystem Object Reference.

Actors: Array of Actor Object References. The actors to remove from the provided DataLayer.

Data Layer: Data Layer Object Reference.

## Outputs

Out: Exec.

Return Value: Boolean. true if at least one actor was removed from the DataLayer. false is returned if all the actors already belonged to the DataLayer..
