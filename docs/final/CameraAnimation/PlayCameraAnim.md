# PlayCameraAnim

在此相机上播放指定的 CameraAnim。

目标是玩家相机管理器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18134163.png)

## Inputs

在。执行。

目标。播放器相机管理器对象参考。

动画。摄像机动画对象参考。应该在这个实例上播放的动画。

Rate（速率）。Float（单精度）。播放动画的速度。1.0 为正常。

规模。Float（单精度）。播放动画的 "强度"。1.0 为正常。

Blend in Time（融合时间）。Float（单精度）。掺入的时间，以线性方式掺入。

Blend Out Time（融合时间）。Float (single-precision). 掺入的时间：线性掺入的时间。

循环。Boolean（布尔）。为真，如果动画到达终点，则循环播放。

Random Start Time（随机开始时间）：布尔值。是否选择一个随机的时间开始播放。与 bLoop=true 和一个持续时间一起使用，用于随机化抖动等事情。

持续时间。Float（单精度）。这个动画的可选总播放时间，包括混合。0 表示使用动画的自然持续时间，如果是循环播放，则是无限的。

播放空间。ECameraShakePlaySpace 枚举。在哪个空间播放动画。

User Play Space Rot: 旋转器。自定义播放空间，当播放空间为 UserDefined 时使用。

## Outputs

Out：输出。执行：执行。

返回值。相机动画实例对象参考。CameraAnim 实例，它可以在事后存储以操作/停止动画。

<hr>

Play the indicated CameraAnim on this camera.

Target is Player Camera Manager

## 图示

![](/uploads/projects/ue-bluprint/20221218-18134163.png)

## Inputs

In: Exec.

Target: Player Camera Manager Object Reference.

Anim: Camera Anim Object Reference. The animation that should play on this instance..

Rate: Float (single-precision). How fast to play the animation. 1.0 is normal..

Scale: Float (single-precision). How "intense" to play the animation. 1.0 is normal..

Blend in Time: Float (single-precision). Time to linearly ramp in..

Blend Out Time: Float (single-precision). Time to linearly ramp out..

Loop: Boolean. True to loop the animation if it hits the end..

Random Start Time: Boolean. Whether or not to choose a random time to start playing. Useful with bLoop=true and a duration to randomize things like shakes..

Duration: Float (single-precision). Optional total playtime for this animation, including blends. 0 means to use animations natural duration, or infinite if looping..

Play Space: ECameraShakePlaySpace Enum. Which space to play the animation in..

User Play Space Rot: Rotator. Custom play space, used when PlaySpace is UserDefined..

## Outputs

Out: Exec.

Return Value: Camera Anim Inst Object Reference. The CameraAnim instance, which can be stored to manipulate/stop the anim after the fact..
