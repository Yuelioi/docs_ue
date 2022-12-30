# BreakXRMotionControllerData

添加一个节点，将'XRMotionControllerData'分解成其成员字段

## 图示

![]($-20221218-14460577.png)

## Inputs

XRMotion控制器的数据。XRMotion控制器数据结构（通过参考）。  

## Outputs

有效。布尔型。有效。

设备名称。名称。设备名称。

应用程序实例ID：指导结构。应用实例ID。

设备视觉类型。EXRVisualType枚举。设备视觉类型。

手的索引。EControllerHand Enum.手指数。

追踪状态。ETTrackingStatus枚举。追踪状态。

握持位置。向量。握持位置。

握力旋转：Quat结构。握力旋转。

瞄准位置。矢量。瞄准位置：.对于手控器，提供一个基于肘部的更稳定的矢量。

目标旋转。Quat结构。瞄准旋转。

手键位置。阵列矢量。手键位置：。这个数组的索引是EHandKeypoint的值（Palm, Wrist, ThumbMetacarpal, etc.）。

手键旋转。Quat结构的阵列。手键旋转：。这个数组的索引是EHandKeypoint的值（Palm, Wrist, ThumbMetacarpal, etc.）。

手键半径。Float（单精度）的数组。手键半径：。这个数组的索引是EHandKeypoint（手掌、手腕、拇指掌骨等）的值。

是抓取的。布尔型。是否被抓取。
