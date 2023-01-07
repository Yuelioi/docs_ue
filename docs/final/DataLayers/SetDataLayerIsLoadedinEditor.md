# SetDataLayerIsLoadedinEditor

将 DataLayer 的 IsLoadedInEditor 标志改变为所提供的状态

目标是数据层编辑子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-18351795.png)

## Inputs

在。执行。

目标。数据层编辑子系统对象参考。

数据层。数据层对象参考。要影响的数据层。

Is Loaded in Editor：布尔值。标志 IsLoadedInEditor 的新值。如果是 True，编辑器的加载将考虑这个 DataLayer 加载或不加载这个 DataLayer 的 Actor 部分。如果一个 Actor 的所有 DataLayer 不是 LoadedInEditor，那么它将不会被加载到编辑器中。

是来自于用户改变。布尔值。如果这个变化是来自于用户的变化或不是。

## Outputs

输出。执行。

返回值。布尔值。

<hr>

Changes the DataLayer's IsLoadedInEditor flag to the provided state

Target is Data Layer Editor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18351795.png)

## Inputs

In: Exec.

Target: Data Layer Editor Subsystem Object Reference.

Data Layer: Data Layer Object Reference. The DataLayer to affect..

Is Loaded in Editor: Boolean. The new value of the flag IsLoadedInEditor. If True, the Editor loading will consider this DataLayer to load or not an Actor part of this DataLayer. An Actor will not be loaded in the Editor if all its DataLayers are not LoadedInEditor..

Is from User Change: Boolean. If this change originates from a user change or not..

## Outputs

Out: Exec.

Return Value: Boolean.
