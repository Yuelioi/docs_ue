# Interpolation

在这一页

  * 行动





## Actions

是否插值完成。返回插值是否完成，因为已经达到了目标。当插值被禁用时为真。目标是射弹运动组件。

Move Interpolation Target.移动UpdateComponent，它也是被插值组件的插值目标。如果没有内插的组件，这只是移动UpdateComponent。通常从PostNetReceiveLocationAndRotation()或类似的Actor中使用这个。目标是投射运动组件。

重置插值。重置插值，使插值后的组件重新回到初始位置/旋转，没有任何额外的偏移。目标是投射运动组件。

设置插值组件。指定将用于网络插值/平滑的组件。我们希望这是一个连接在UpdateComponent下面的组件。当网络更新使用MoveInterpolationTarget()移动UpdateComponent时，内插组件的相对偏移将被保持并平滑化。组件的当前相对位置和旋转被保存为未来插值的目标偏移。见。MoveInterpolationTarget(), bInterpMovement, bInterpRotation。目标是投射运动组件。
