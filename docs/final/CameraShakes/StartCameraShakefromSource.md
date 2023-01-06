# StartCameraShakefromSource

在此相机上播放相机抖动。

目标是玩家相机管理器

## 图示

![]($-20221218-18142454.png)

## Inputs

在。执行。

目标。播放器相机管理器 对象参考。

摇晃类。相机摇动基类参考。

源组件。摄像机抖动源组件对象参考。摄像机抖动的源头。

刻度。Float（单精度）。在与源的距离计算出的动态比例之上应用一个额外的恒定比例。

播放空间。ECameraShakePlaySpace枚举。在哪个坐标系中播放抖动（影响摆动和摄像机动画）。

User Play Space Rot: Rotator（旋转器）。当PlaySpace == CAPS_UserDefined.时播放抖动的坐标系。 

## Outputs

输出：输出。执行：执行。

返回值。相机摇动基本对象参考。

Plays a camera shake on this camera.

Target is Player Camera Manager

## 图示

![]($-20221218-18142454.png)

## Inputs

In: Exec.

Target: Player Camera Manager Object Reference.

Shake Class: Camera Shake Base Class Reference.

Source Component: Camera Shake Source Component Object Reference. The source from which the camera shake originates..

Scale: Float (single-precision). Applies an additional constant scale on top of the dynamic scale computed with the distance to the source.

Play Space: ECameraShakePlaySpace Enum. Which coordinate system to play the shake in (affects oscillations and camera anims).

User Play Space Rot: Rotator. Coordinate system to play shake when PlaySpace == CAPS_UserDefined..  

## Outputs

Out: Exec.

Return Value: Camera Shake Base Object Reference.

