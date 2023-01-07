# SetActorRotation

将 Actor 的旋转瞬间设置为指定的旋转。

目标是演员

## 图示

![](/uploads/projects/ue-bluprint/20221218-21153221.png)

## Inputs

在。执行。

目标。演员对象参考。

新的轮回。旋转器。演员的新轮换...

传送物理学。布尔值。我们是否传送物理状态（如果此对象启用了物理碰撞）。如果是 true，这个物体的物理速度是不变的（所以布娃娃部分不会受到位置变化的影响）。如果是假的，物理速度会根据位置的变化而更新（影响布娃娃的部分）。

## Outputs

出：执行。

返回值。布尔值。旋转是否被成功设置。

<hr>

Set the Actor's rotation instantly to the specified rotation.

Target is Actor

## 图示

![](/uploads/projects/ue-bluprint/20221218-21153221.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

New Rotation: Rotator. The new rotation for the Actor..

Teleport Physics: Boolean. Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts)..

## Outputs

Out: Exec.

Return Value: Boolean. Whether the rotation was successfully set..
