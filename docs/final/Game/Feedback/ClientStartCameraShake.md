# ClientStartCameraShake

播放相机抖动

目标是玩家控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-19054270.png)

## Inputs

在。执行。

目标。玩家控制器对象参考。

抖动。相机抖动基类参考。播放相机摇动的动画。

规模。Float（单精度）。定义播放动画的 "强度 "的标量。

播放空间。ECameraShakePlaySpace 枚举。在哪个坐标系中播放抖动（用于抖动中的 CameraAnims）。

用户播放空间旋转。旋转器。当 PlaySpace = CAPS_UserDefined 时使用的矩阵。

## Outputs

出：执行。

<hr>

Play Camera Shake

Target is Player Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-19054270.png)

## Inputs

In: Exec.

Target: Player Controller Object Reference.

Shake: Camera Shake Base Class Reference. Camera shake animation to play.

Scale: Float (single-precision). Scalar defining how "intense" to play the anim.

Play Space: ECameraShakePlaySpace Enum. Which coordinate system to play the shake in (used for CameraAnims within the shake)..

User Play Space Rot: Rotator. Matrix used when PlaySpace = CAPS_UserDefined.

## Outputs

Out: Exec.
