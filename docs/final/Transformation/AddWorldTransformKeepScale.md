# AddWorldTransformKeepScale

在世界空间中为组件的变换添加一个 delta。尺度不变。

目标是场景组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-21143887.png)

## Inputs

在。执行。

目标。场景组件对象参考。

三角洲变换。变换（通过参考）。该组件在世界空间中的变换变化。由于我们保留了原来的比例，所以比例被忽略了。

扫荡。布尔值。我们是否清扫到目标位置，沿途触发重叠，如果被什么东西阻挡，就在目标位置前停止。只有根组件被清扫并检查是否有碰撞阻挡，子组件的移动不被清扫。如果碰撞是关闭的，这没有影响。

传送。布尔值。我们是否传送物理状态（如果此对象启用了物理碰撞）。如果是 true，这个物体的物理速度是不变的（所以布娃娃部分不会受到位置变化的影响）。如果是假的，物理学速度会根据位置的变化而更新（影响布娃娃的部分）。如果 CCD 是打开的，并且没有传送，这将影响沿整个扫描体积的物体。

## Outputs

出：执行。

扫射的结果。命中结果结构。如果扫射是真实的，任何冲击的命中结果。

<hr>

Adds a delta to the transform of the component in world space. Scale is unchanged.

Target is Scene Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-21143887.png)

## Inputs

In: Exec.

Target: Scene Component Object Reference.

Delta Transform: Transform (by ref). Change in transform in world space for the component. Scale is ignored since we preserve the original scale..

Sweep: Boolean. Whether we sweep to the destination location, triggering overlaps along the way and stopping short of the target if blocked by something. Only the root component is swept and checked for blocking collision, child components move without sweeping. If collision is off, this has no effect..

Teleport: Boolean. Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts). If CCD is on and not teleporting, this will affect objects along the entire sweep volume..

## Outputs

Out: Exec.

Sweep Hit Result: Hit Result Structure. Hit result from any impact if sweep is true..
