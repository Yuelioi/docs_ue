# BreakGameplayCueNotify_DecalInfo

添加一个打破'GameplayCueNotify_DecalInfo'的节点到其成员字段中。

## 图示

![]($-20221218-14363039.png)

## Inputs

Gameplay Cue Notify Decal Info。Gameplay Cue Notify Decal Info 结构（通过引用）。 

## Outputs

Spawn Condition Override: Gameplay Cue Notify Spawn Condition 结构。Spawn Condition Override:。生成贴花前要检查的条件。

放置信息覆盖。Gameplay Cue Notify Placement Info Structure. 放置信息重写：。定义贴花的放置方式。

Decal Material（贴花材料）。材料界面对象参考。Decal Material:. 生成的水贴材料。

Decal Size（贴花尺寸）。矢量。Decal Size:（贴花尺寸）。本地空间中的贴花尺寸（不包括组件比例）。

Override Spawn Condition（覆盖生成条件）。Boolean（布尔）。Override Spawn Condition（覆盖再生条件）：。如果启用，使用产卵条件覆盖而不是默认条件。

Override Placement Info（覆盖放置信息）。布尔值。覆盖放置信息：。如果启用，使用放置信息覆盖而不是默认的。

Override Fade Out（覆盖淡出）。布尔值。Override Fade Out（覆盖淡出）：。如果启用，覆盖默认贴花演员的淡出值。

Fade Out Start Delay（淡出开始延迟）。浮点数（单精度）。淡出开始延时：。设定贴花演员何时开始淡出。将覆盖类中的设置。

淡出持续时间。Float（单精度）。淡出持续时间：。设置贴花演员淡出的时间。将覆盖类中的设置。