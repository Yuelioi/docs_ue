# BreakGameplayCueNotify_CameraAni-

添加一个打破'GameplayCueNotify_CameraAnimInfo'的节点到其成员字段中。

## 图示

![]($-20221218-14362775.png)

## Inputs

Gameplay Cue Notify Camera Anim Info。Gameplay Cue Notify Camera Anim Info 结构（通过引用）。 

## Outputs

Spawn Condition Override: Gameplay Cue Notify Spawn Condition 结构。Spawn Condition Override:再生条件覆盖。播放摄像机动画前要检查的条件.

Camera Anim: Camera Anim Object Reference. Camera Anim:. 播放摄像机动画.

Anim Scale: Float (single-precision). Anim Scale:. 应用于摄像机动画的比例。

播放速率: Float（单精度）。播放率：。摄像机动画的播放速率。

融合时间。Float（单精度）。混入时间：。用于混合摄像机动画的时间（秒）。

Blend Out Time（混入时间）。Float（单精度）。Blend Out Time:. 用来混合摄像机动画的时间（秒）。

Play Space（播放空间）。EGameplayCueNotify_EffectPlaySpace枚举。Play Space:.播放空间。摄像机动画的播放空间，相对于哪个坐标空间。

Is Looping（循环）。布尔值。Is Looping:.是否循环？如果启用，摄像机动画将被设置为循环播放。

Random Start Time（随机开始时间）：布尔值。随机开始时间：。如果启用，摄像机动画将在一个随机时间开始。只在循环时使用。

Override Spawn Condition（覆盖再生条件）。布尔值。Override Spawn Condition:.覆盖再生条件。如果启用，使用覆盖的产卵条件，而不是默认的。