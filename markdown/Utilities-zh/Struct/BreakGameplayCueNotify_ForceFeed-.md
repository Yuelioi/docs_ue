# BreakGameplayCueNotify_ForceFeed-

添加一个打破'GameplayCueNotify_ForceFeedbackInfo'的节点到其成员字段中。

## 图示

![]($-20221218-14363148.png)

## Inputs

Gameplay Cue Notify Force Feedback Info。Gameplay Cue Notify Force Feedback Info 结构（通过引用）。 

## Outputs

Spawn Condition Override: Gameplay Cue Notify Spawn Condition 结构。Spawn Condition Override:。在播放武力反馈之前要检查的条件。

安置信息覆盖。Gameplay Cue Notify Placement Info Structure. 放置信息重写：。定义力反馈的放置方式。

Force Feedback Effect（力反馈效果）。Force Feedback Effect Object Reference（力反馈效果对象参考）。Force Feedback Effect:.力反馈效果。播放的力反馈效果。

Force Feedback Tag（力反馈标签）。名称。力反馈标签：。用于识别力反馈效果的标签，以便以后可以取消它。警告。如果它是 "无"，如果它被取消，将停止所有的力反馈效果。

是否循环。布尔值。是否循环：。如果启用，力反馈将被设置为循环。

覆盖再生条件。布尔值。Override Spawn Condition（覆盖再生条件）：。如果启用，使用产卵条件覆盖，而不是默认条件。

Override Placement Info（覆盖位置信息）。布尔值。覆盖放置信息：。如果启用，使用放置信息覆盖，而不是默认的。

在世界中游戏。布尔值。在世界中播放：。如果启用，力反馈将在世界中播放并影响所有玩家。

世界强度。Float（单精度）。世界强度：。在世界中播放时应用于力反馈的乘数。

World Attenuation（世界衰减）。Force Feedback Attenuation（力反馈衰减）对象参考。World Attenuation:（世界衰减）。在世界中播放时，力反馈是如何通过距离衰减的。