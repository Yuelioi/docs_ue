# SetActorRelativeLocation

将角色的RootComponent设置到指定的相对位置。

目标是演员

## 图示

![]($-20221218-21152778.png)

## Inputs

在。执行。

目标。演员对象参考。

新的相对位置。矢量。行为者根部分量的新相对位置。

扫荡。布尔值。我们是否清扫到目标位置，沿途触发重叠，如果被什么东西阻挡，就在目标位置前停止。只有根组件被清扫并检查是否有碰撞阻挡，子组件的移动不被清扫。如果碰撞是关闭的，这没有影响。

传送。布尔值。我们是否传送物理状态（如果此对象启用了物理碰撞）。如果是true，这个物体的物理速度是不变的（所以布娃娃部分不会受到位置变化的影响）。如果是假的，物理学速度会根据位置的变化而更新（影响布娃娃的部分）。如果CCD是打开的，并且没有传送，这将影响沿着整个扫过的体积的物体。

## Outputs

出：执行。

扫射的结果。命中结果结构。
