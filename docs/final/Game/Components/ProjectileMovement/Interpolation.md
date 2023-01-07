# Interpolation

在这一页

- 行动

## Actions

是否插值完成。返回插值是否完成，因为已经达到了目标。当插值被禁用时为真。目标是射弹运动组件。

Move Interpolation Target.移动 UpdateComponent，它也是被插值组件的插值目标。如果没有内插的组件，这只是移动 UpdateComponent。通常从 PostNetReceiveLocationAndRotation()或类似的 Actor 中使用这个。目标是投射运动组件。

重置插值。重置插值，使插值后的组件重新回到初始位置/旋转，没有任何额外的偏移。目标是投射运动组件。

设置插值组件。指定将用于网络插值/平滑的组件。我们希望这是一个连接在 UpdateComponent 下面的组件。当网络更新使用 MoveInterpolationTarget()移动 UpdateComponent 时，内插组件的相对偏移将被保持并平滑化。组件的当前相对位置和旋转被保存为未来插值的目标偏移。见。MoveInterpolationTarget(), bInterpMovement, bInterpRotation。目标是投射运动组件。

<hr>

On this page

- Actions

## Actions

Is Interpolation Complete. Returns whether interpolation is complete because the target has been reached. True when interpolation is disabled.: Target is Projectile Movement Component.

Move Interpolation Target. Moves the UpdatedComponent, which is also the interpolation target for the interpolated component. If there is not interpolated component, this simply moves UpdatedComponent.. Use this typically from PostNetReceiveLocationAndRotation() or similar from an Actor.: Target is Projectile Movement Component.

Reset Interpolation. Resets interpolation so that interpolated component snaps back to the initial location/rotation without any additional offsets.: Target is Projectile Movement Component.

Set Interpolated Component. Assigns the component that will be used for network interpolation/smoothing. It is expected that this is a component attached somewhere below the UpdatedComponent.. When network updates use MoveInterpolationTarget() to move the UpdatedComponent, the interpolated component's relative offset will be maintained and smoothed over. the course of future component ticks. The current relative location and rotation of the component is saved as the target offset for future interpolation.. See: MoveInterpolationTarget(), bInterpMovement, bInterpRotation: Target is Projectile Movement Component.
