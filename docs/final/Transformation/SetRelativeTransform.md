# SetRelativeTransform

设置组件相对于其父级的变换。

目标是场景组件

## 图示

![]($-20221218-21154150.png)

## Inputs

在。执行。

目标。场景组件对象参考。

新的转化。变换（通过引用）。组件相对于其父级的新变换。

扫荡。布尔值。我们是否扫到目的地（目前不支持旋转）。

传送。布尔值。我们是否传送物理状态（如果此对象启用了物理碰撞）。如果是true，这个物体的物理速度是不变的（所以布娃娃部分不会受到位置变化的影响）。如果是假的，物理速度会根据位置的变化进行更新（影响布娃娃的部分）。  

## Outputs

出：执行。

扫射的结果。命中结果结构。如果扫射是真实的，任何冲击的命中结果。

Set the transform of the component relative to its parent

Target is Scene Component

## 图示

![]($-20221218-21154150.png)

## Inputs

In: Exec.

Target: Scene Component Object Reference.

New Transform: Transform (by ref). New transform of the component relative to its parent..

Sweep: Boolean. Whether we sweep to the destination (currently not supported for rotation)..

Teleport: Boolean. Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts)..  

## Outputs

Out: Exec.

Sweep Hit Result: Hit Result Structure. Hit result from any impact if sweep is true..

