# AddLocalRotation

为组件在其本地参考框架中的旋转添加一个德尔塔。

目标是场景组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-21143098.png)

## Inputs

在。执行。

目标。场景组件对象参考。

三角洲的旋转。旋转器。组件在其本地参考框架中的旋转变化。

扫荡。布尔值。是否扫到目的地（目前不支持旋转）。

传送。布尔值。我们是否传送物理状态（如果此对象启用了物理碰撞）。如果是 true，这个物体的物理速度是不变的（所以布娃娃部分不会受到位置变化的影响）。如果是假的，物理速度会根据位置的变化进行更新（影响布娃娃的部分）。

## Outputs

出：执行。

扫射的结果。命中结果结构。如果扫射是真实的，任何冲击的命中结果。

<hr>

Adds a delta to the rotation of the component in its local reference frame

Target is Scene Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-21143098.png)

## Inputs

In: Exec.

Target: Scene Component Object Reference.

Delta Rotation: Rotator. Change in rotation of the component in its local reference frame..

Sweep: Boolean. Whether we sweep to the destination (currently not supported for rotation)..

Teleport: Boolean. Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts)..

## Outputs

Out: Exec.

Sweep Hit Result: Hit Result Structure. Hit result from any impact if sweep is true..
