# AddRelativeRotation

添加一个delta，即组件相对于其父体的旋转。

目标是场景组件

## 图示

![]($-20221218-21143438.png)

## Inputs

在。执行。

目标。场景组件对象参考。

三角洲的旋转。旋转器。组件相对于母体的旋转变化...

扫荡。布尔值。是否扫到目的地（目前不支持旋转）。

传送。布尔值。我们是否传送物理状态（如果此对象启用了物理碰撞）。如果是true，这个物体的物理速度是不变的（所以布娃娃部分不会受到位置变化的影响）。如果是假的，物理速度会根据位置的变化进行更新（影响布娃娃的部分）。  

## Outputs

出：执行。

扫射的结果。命中结果结构。如果扫射是真实的，任何冲击的命中结果。
