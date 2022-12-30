# GetColorCorrectRegionsSubsystem

获取颜色正确的区域子系统（世界子系统）。

世界子系统，负责管理关卡中的AColorCorrectRegion类。这个子系统处理：。关卡加载，撤销/重做，添加到关卡，从关卡中删除事件。不幸的是，AActor类本身并不知道它在关卡中何时被添加/删除、撤销/重做等。

这是唯一的方法（我们发现），以或多或少有效的方式处理所有的区域聚合案例。涵盖的情况。区域添加到关卡，从关卡中删除，关卡加载，撤销，重做，关卡关闭，编辑器关闭：。世界子系统通过三个事件OnLevelActorAdded, OnLevelActorDeleted, OnLevelActorListChanged来跟踪一个关卡中的所有区域。演员类不知道他们在关卡中何时被添加/删除/undo/redo等，因此这是管理这些事件的最好地方。替代策略（全部测试过）：。世界的AddOnActorSpawnedHandler。有缺陷。在一些我们不需要的情况下被调用，但在UNDO/REDO时不会被调用。AActor的PostSpawnInitialize、PostActorCreated和OnConstruction也是有缺陷的。AActor没有一个内部事件来处理它的删除（EndPlay是我们最接近的）。

## 图示

![]($-20221218-21374578.png)

## Inputs

## Outputs

返回值。颜色正确的区域子系统对象参考。
