# StartCameraShake

在此相机上播放相机抖动。

目标是玩家相机管理器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18142322.png)

## Inputs

在。执行。

目标。播放器相机管理器 对象参考。

摇晃类。相机摇动基类参考。

尺度。Float（单精度）。定义播放抖动的 "强度 "的标量。1.0 是正常的（如自创的）。

播放空间。ECameraShakePlaySpace 枚举。在哪个坐标系中播放抖动（影响摆动和摄像机动画）。

User Play Space Rot: Rotator（旋转器）。当 PlaySpace == CAPS_UserDefined.时播放抖动的坐标系。

## Outputs

输出：输出。执行：执行。

返回值。相机摇动基本对象参考。

<hr>

Plays a camera shake on this camera.

Target is Player Camera Manager

## 图示

![](/uploads/projects/ue-bluprint/20221218-18142322.png)

## Inputs

In: Exec.

Target: Player Camera Manager Object Reference.

Shake Class: Camera Shake Base Class Reference.

Scale: Float (single-precision). Scalar defining how "intense" to play the shake. 1.0 is normal (as authored)..

Play Space: ECameraShakePlaySpace Enum. Which coordinate system to play the shake in (affects oscillations and camera anims).

User Play Space Rot: Rotator. Coordinate system to play shake when PlaySpace == CAPS_UserDefined..

## Outputs

Out: Exec.

Return Value: Camera Shake Base Object Reference.
