# SetActorRelativeRotation

将角色的 RootComponent 设置为指定的相对旋转。

目标是演员

## 图示

![](/uploads/projects/ue-bluprint/20221218-21152889.png)

## Inputs

在。执行。

目标。演员对象参考。

新的相对旋转。旋转器。行为者根部组件的新相对旋转。

扫荡。布尔值。我们是否清扫到目标位置，沿途触发重叠，如果被什么东西阻挡，就在目标位置前停止。只有根组件被清扫并检查是否有碰撞阻挡，子组件的移动不被清扫。如果碰撞是关闭的，这没有影响。

传送。布尔值。我们是否传送物理状态（如果此对象启用了物理碰撞）。如果是 true，这个物体的物理速度是不变的（所以布娃娃部分不会受到位置变化的影响）。如果是假的，物理学速度会根据位置的变化而更新（影响布娃娃的部分）。如果 CCD 是打开的，并且没有传送，这将影响沿着整个扫过的体积的物体。

## Outputs

出：执行。

扫射的结果。命中结果结构。

<hr>

Set the actor's RootComponent to the specified relative rotation

Target is Actor

## 图示

![](/uploads/projects/ue-bluprint/20221218-21152889.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

New Relative Rotation: Rotator. New relative rotation of the actor's root component.

Sweep: Boolean. Whether we sweep to the destination location, triggering overlaps along the way and stopping short of the target if blocked by something. Only the root component is swept and checked for blocking collision, child components move without sweeping. If collision is off, this has no effect..

Teleport: Boolean. Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts). If CCD is on and not teleporting, this will affect objects along the entire swept volume..

## Outputs

Out: Exec.

Sweep Hit Result: Hit Result Structure.
