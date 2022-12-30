# BreakCameraAnimationParams

添加一个节点，将'CameraAnimationParams'分解到其成员字段中。

## 图示

![]($-20221218-14320440.png)

## Inputs

相机动画参数。相机动画参数结构（通过引用）。 

## Outputs

播放率。Float（单精度）。Play Rate:.播放率。播放新相机动画的时间刻度。

规模。Float（单精度）。刻度：。新建摄像机动画的全局比例。

缓和类型。ECameraAnimationEasingType枚举。Ease in Type:.缓和类型。缓和函数类型。

Ease In Duration（缓和持续时间）。Float（单精度）。Ease in Duration:。缓进持续时间，以秒为单位。

Ease Out Type（缓和类型）。ECameraAnimationEasingType枚举。Ease Out Type:.缓和类型。缓和功能类型。

Ease Out Duration（缓和持续时间）。Float（单精度）。Ease Out Duration:。缓和持续时间，以秒为单位。

循环。布尔值。循环：。摄像机动画是否要循环。

Random Start Time（随机开始时间）：布尔值。随机开始时间：。摄像机动画是否应该有一个随机的开始时间。

持续时间重写。Float（单精度）。持续时间重写：。用新的持续时间（包括混合）覆盖动画的持续时间。

播放空间。ECameraAnimationPlaySpace枚举。Play Space:.播放空间。用于新相机抖动的变换空间。

User Play Space Rot: 旋转器。User Play Space Rot:.用户播放空间旋转器。当PlaySpace为UserDefined时使用的用户空间。
