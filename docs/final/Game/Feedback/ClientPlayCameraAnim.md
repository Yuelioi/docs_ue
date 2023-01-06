# ClientPlayCameraAnim

在此相机上播放指定的CameraAnim。

目标是玩家控制器

## 图示

![]($-20221218-19053927.png)

## Inputs

在。执行。

目标。玩家控制器对象参考。

播放动画:相机动画对象参考。播放的摄像机动画。

规模。Float（单精度）。"强度 "标量。这是该动画第一次播放的刻度。

速率。浮点数（单精度）。播放率的乘数。1.0 = 正常...

融合在时间中。Float（单精度）。从零开始插值的时间，用于平滑启动。

融合时间。Float（单精度）。插值到零的时间，用于平滑处理。

循环。布尔值。如果动画应该循环，则为真，否则为假。

随机开始时间：布尔值。是否选择一个随机的时间来开始游戏。只有在bLoop = true时才真正有意义。

空间。ECameraShakePlaySpace枚举。动画播放区域。

自定义游戏空间。旋转器。当Space = CAPS_UserDefined时使用的矩阵。  

## Outputs

出：执行。

Play the indicated CameraAnim on this camera.

Target is Player Controller

## 图示

![]($-20221218-19053927.png)

## Inputs

In: Exec.

Target: Player Controller Object Reference.

Anim to Play: Camera Anim Object Reference. Camera animation to play.

Scale: Float (single-precision). "Intensity" scalar. This is the scale at which the anim was first played..

Rate: Float (single-precision). Multiplier for playback rate. 1.0 = normal..

Blend in Time: Float (single-precision). Time to interpolate in from zero, for smooth starts.

Blend Out Time: Float (single-precision). Time to interpolate out to zero, for smooth finishes.

Loop: Boolean. True if the animation should loop, false otherwise.

Random Start Time: Boolean. Whether or not to choose a random time to start playing. Only really makes sense for bLoop = true.

Space: ECameraShakePlaySpace Enum. Animation play area.

Custom Play Space: Rotator. Matrix used when Space = CAPS_UserDefined.  

## Outputs

Out: Exec.

