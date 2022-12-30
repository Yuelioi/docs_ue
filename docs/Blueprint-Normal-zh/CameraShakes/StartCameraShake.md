# StartCameraShake

在此相机上播放相机抖动。

目标是玩家相机管理器

## 图示

![]($-20221218-18142322.png)

## Inputs

在。执行。

目标。播放器相机管理器 对象参考。

摇晃类。相机摇动基类参考。

尺度。Float（单精度）。定义播放抖动的 "强度 "的标量。1.0是正常的（如自创的）。

播放空间。ECameraShakePlaySpace枚举。在哪个坐标系中播放抖动（影响摆动和摄像机动画）。

User Play Space Rot: Rotator（旋转器）。当PlaySpace == CAPS_UserDefined.时播放抖动的坐标系。 

## Outputs

输出：输出。执行：执行。

返回值。相机摇动基本对象参考。
