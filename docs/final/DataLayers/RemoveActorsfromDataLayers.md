# RemoveActorsfromDataLayers

移除数据层的角色

目标是数据层编辑子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-18351080.png)

## Inputs

在。Exec.

目标。数据层编辑子系统对象参考。

行为者。演员对象引用的数组。要移除到数据层的角色。

Data Layers: 数据层对象引用的数组。一个有效的 DataLayers 的列表。

## Outputs

输出。执行：执行。

返回值。布尔值。如果至少有一个 actor 从至少一个 DataLayer 中被移除，则为 true。如果没有一个 actor 属于任何指定的 DataLayer，则返回 false。

<hr>

Remove the actors to the DataLayers

Target is Data Layer Editor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18351080.png)

## Inputs

In: Exec.

Target: Data Layer Editor Subsystem Object Reference.

Actors: Array of Actor Object References. The actors to remove to the DataLayers.

Data Layers: Array of Data Layer Object References. A valid list of DataLayers..

## Outputs

Out: Exec.

Return Value: Boolean. true if at least one actor was removed from at least one DataLayer. false is returned if none of the actors belonged to any of the specified DataLayers..
