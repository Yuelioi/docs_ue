# SetActorLocation

将演员移到指定的位置。

目标是演员

## 图示

![]($-20221218-21152548.png)

## Inputs

在。执行。

目标。演员对象参考。

新的位置。向量。将演员移动到的新位置。

扫荡。布尔值。我们是否清扫到目标位置，沿途触发重叠，如果被什么东西阻挡，就在目标位置前停止。只有根组件被清扫并检查是否有碰撞阻挡，子组件的移动不被清扫。如果碰撞是关闭的，这没有影响。

传送。布尔值。我们是否传送物理状态（如果此对象启用了物理碰撞）。如果是true，这个物体的物理速度是不变的（所以布娃娃部分不会受到位置变化的影响）。如果是假的，物理学速度会根据位置的变化而更新（影响布娃娃的部分）。如果CCD是打开的，并且没有传送，这将影响沿着整个扫过的体积的物体。

## Outputs

出：执行。

扫射的结果。命中结果结构。这一招的命中结果，如果横扫...

返回值。布尔值。位置是否被成功设置（如果没有被扫除），或者是否发生了任何移动（如果被扫除）。

Move the Actor to the specified location.

Target is Actor

## 图示

![]($-20221218-21152548.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

New Location: Vector. The new location to move the Actor to..

Sweep: Boolean. Whether we sweep to the destination location, triggering overlaps along the way and stopping short of the target if blocked by something. Only the root component is swept and checked for blocking collision, child components move without sweeping. If collision is off, this has no effect..

Teleport: Boolean. Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts). If CCD is on and not teleporting, this will affect objects along the entire swept volume..  

## Outputs

Out: Exec.

Sweep Hit Result: Hit Result Structure. The hit result from the move if swept..

Return Value: Boolean. Whether the location was successfully set (if not swept), or whether movement occurred at all (if swept)..

