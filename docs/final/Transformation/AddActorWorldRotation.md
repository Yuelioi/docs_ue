# AddActorWorldRotation

为这个角色在世界空间中的旋转增加一个 delta。

目标是演员

## 图示

![](/uploads/projects/ue-bluprint/20221218-21142647.png)

## Inputs

在。执行。

目标。演员对象参考。

三角洲的旋转。旋转器。旋转的变化。

扫荡。布尔值。是否对目标旋转进行扫描（目前不支持旋转）。

传送。布尔值。我们是否传送物理状态（如果此对象启用了物理碰撞）。如果是 true，这个物体的物理速度是不变的（所以布娃娃部分不会受到位置变化的影响）。如果是假的，物理学速度会根据位置的变化而更新（影响布娃娃的部分）。如果 CCD 是打开的，并且没有传送，这将影响沿着整个扫过的体积的物体。

## Outputs

出：执行。

扫射的结果。命中结果结构。这一招的命中结果，如果横扫...

<hr>

Adds a delta to the rotation of this actor in world space.

Target is Actor

## 图示

![](/uploads/projects/ue-bluprint/20221218-21142647.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

Delta Rotation: Rotator. The change in rotation..

Sweep: Boolean. Whether to sweep to the target rotation (not currently supported for rotation)..

Teleport: Boolean. Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts). If CCD is on and not teleporting, this will affect objects along the entire swept volume..

## Outputs

Out: Exec.

Sweep Hit Result: Hit Result Structure. The hit result from the move if swept..
