# BreakGameplayCueNotify_BurstEffe-

添加一个打破'GameplayCueNotify_BurstEffects'的节点到其成员字段中。

## 图示

![]($-20221218-14362687.png)

## Inputs

Gameplay Cue Notify Burst Effects。Gameplay Cue Notify Burst Effects 结构（通过引用）。 

## Outputs

Burst Particles。Array of Gameplay Cue Notify Particle Info Structures. Burst Particles:. 执行游戏提示时产生的粒子系统。这些系统不应该使用循环效果！。

Burst Sounds（爆炸声）。Gameplay Cue Notify Sound Info Structures阵列。Burst Sounds:（爆炸声）。在执行游戏提示时播放的声音。这些声音不应使用循环效果！。

Burst Camera Shake(摄像机抖动) Gameplay Cue Notify Camera Shake信息结构。Burst Camera Shake:（突发相机抖动）。在执行游戏提示时播放的相机抖动。这绝不应该使用循环效果！。

Burst Camera Anim: Gameplay Cue Notify Camera Anim 信息结构。Burst Camera Anim:.摄像机突发动画。在执行游戏提示时播放的摄像机动画。这不应该使用循环效果！.

Burst Camera Lens Effect: Gameplay Cue Notify Camera Lens Effect信息结构。Burst Camera Lens Effect:. 执行游戏提示时要播放的相机镜头效果。这绝不应该使用循环效果！。

爆发力反馈。Gameplay Cue Notify Force Feedback信息结构。Burst Force Feedback:（爆发力反馈）。执行游戏提示时播放的力反馈。这不应该使用循环效果！。

Burst Decal: Gameplay Cue Notify Decal 信息结构。Burst Decal:。在执行游戏提示时产生的贴花。演员应该有淡出的时间，或者应该设置覆盖，以便它能正确地清理。