# SetDataLayerIsLoadedinEditor

将DataLayer的IsLoadedInEditor标志改变为所提供的状态

目标是数据层编辑子系统

## 图示

![]($-20221218-18351795.png)

## Inputs

在。执行。

目标。数据层编辑子系统对象参考。

数据层。数据层对象参考。要影响的数据层。

Is Loaded in Editor：布尔值。标志IsLoadedInEditor的新值。如果是True，编辑器的加载将考虑这个DataLayer加载或不加载这个DataLayer的Actor部分。如果一个Actor的所有DataLayer不是LoadedInEditor，那么它将不会被加载到编辑器中。

是来自于用户改变。布尔值。如果这个变化是来自于用户的变化或不是。 

## Outputs

输出。执行。

返回值。布尔值。
