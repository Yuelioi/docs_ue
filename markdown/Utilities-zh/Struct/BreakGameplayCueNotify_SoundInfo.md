# BreakGameplayCueNotify_SoundInfo

添加一个节点，将'GameplayCueNotify_SoundInfo'分解到其成员字段中。

## 图示

![]($-20221218-14363502.png)

## Inputs

Gameplay Cue Notify Sound Info。Gameplay Cue Notify Sound Info 结构（通过引用）。 

## Outputs

Spawn Condition Override: Gameplay Cue Notify Spawn Condition 结构。Spawn Condition Override: 覆盖再生条件。在播放声音前要检查的条件。

Placement Info Override（放置信息覆盖）。Gameplay Cue Notify Placement Info Structure. Placement Info Override:（放置信息覆盖）。定义声音如何被放置。

声音。声音基本对象参考。声音：。要播放的声音。

Looping Fade Out Duration（循环淡出时间）。Float（单精度）。Looping Fade Out Duration:. 淡出所需的时间。只用于循环游戏的提示。

Looping Fade Volume Level（循环淡出音量）。浮点（单精度）。循环淡出音量级别：。在 "循环淡出持续时间 "中，你希望声音在停止前淡出的音量水平。如果 "循环淡出持续时间 "为零，这个值就不重要了。注意：如果淡出持续时间是正数，而这个值不低于声音正在播放的音量，声音就不会停止！。

声音参数界面信息。Gameplay Cue Notify 声音参数接口信息结构。声音参数接口信息：。定义了如何与声音的接口。

Override Spawn Condition: Boolean. Override Spawn Condition:.覆盖产卵条件。如果启用，使用产卵条件覆盖，而不是默认的。

Override Placement Info（覆盖位置信息）。布尔值。覆盖放置信息：。如果启用，使用放置信息覆盖，而不是默认的。

Use Sound Parameter Interface（使用声音参数接口）。布尔值。Use Sound Parameter Interface:（使用声音参数接口）。如果启用，使用放置信息覆盖，而不是默认的。