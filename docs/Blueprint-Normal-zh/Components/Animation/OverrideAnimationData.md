# OverrideAnimationData

这覆盖了当前SkeletalMeshComponent中的AnimationData参数。这将在组件序列化时序列化，所以它可以在构造脚本中使用。但是请注意，这将覆盖当前的现有数据。如果你想让蓝图中的每个组件都有自定义的默认动画，这可能很有用。这设置了单人模式，这意味着你不能使用AnimBlueprint。

目标是骨架网状组件

## 图示

![]($-20221218-18223422.png)

## Inputs

在。执行。

目标。骨架网状组件对象参考。

在Anim to Play中。动画资产对象参考。

是否循环。布尔值。

正在播放。Boolean.

位置。浮点数（单精度）。

播放率。浮点（单精度）。 

## Outputs

输出。执行。
