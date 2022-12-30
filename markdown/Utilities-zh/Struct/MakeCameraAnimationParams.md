# MakeCameraAnimationParams

添加一个节点，从其成员中创建一个 "CameraAnimationParams"。

## 图示

![]($-20221218-14480636.png)

## Inputs

播放率。Float（单精度）。播放率：。播放新摄像机动画的时间刻度。

规模。Float（单精度）。规模：。新相机动画使用的全局比例。

缓和类型。ECameraAnimationEasingType枚举。缓和类型：。缓和功能类型。

缓和期。Float (single-precision).缓和持续时间：。缓和持续时间，以秒为单位。

缓和类型。ECameraAnimationEasingType枚举。Ease Out Type:。缓和功能类型。

缓和期。Float (single-precision).缓和持续时间：。缓和持续时间，以秒为单位。

循环。布尔型。循环：。摄像机动画是否要循环播放。

随机开始时间：布尔值。Random Start Time（随机开始时间）：。摄像机动画是否应该有一个随机的开始时间。

持续时间重写。Float (single-precision).持续时间重写：。用一个新的持续时间覆盖动画的持续时间（包括混合）。

播放空间。ECameraAnimationPlaySpace枚举。播放空间：。用于新相机抖动的变换空间。

用户播放空间旋转。旋转器。用户游戏空间旋转：。当PlaySpace是UserDefined时使用的用户空间。  

## Outputs

摄像机动画参数。摄像机动画参数结构。
