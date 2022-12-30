# BreakGameplayCueNotify_CameraSha-

添加一个打破'GameplayCueNotify_CameraShakeInfo'的节点到其成员字段中。

## 图示

![]($-20221218-14362952.png)

## Inputs

Gameplay Cue Notify Camera Shake Info。Gameplay Cue Notify Camera Shake Info 结构（通过引用）。 

## Outputs

Spawn Condition Override: Gameplay Cue Notify Spawn Condition 结构。Spawn Condition Override:。播放摄像机抖动前检查的条件。

放置信息覆盖。Gameplay Cue Notify Placement Info Structure. Placement Info Override:（放置信息覆盖）。定义相机抖动的放置方式。

Camera Shake（摄像机摇动）。Camera Shake基类参考。Camera Shake:. 相机抖动的播放。

Shake Scale（摇动比例）。Float（单精度）。Shake Scale:（抖动比例）。应用于相机抖动的比例。

播放空间。EGameplayCueNotify_EffectPlaySpace枚举。Play Space:.播放空间。摄像机抖动的相对坐标空间。

Override Spawn Condition。Boolean. Override Spawn Condition:.覆盖产卵条件。如果启用，则使用重写产卵条件，而非默认条件。

Override Placement Info（覆盖位置信息）。布尔值。覆盖放置信息：。如果启用，使用放置信息覆盖，而不是默认的。

在世界中游戏。布尔值。在世界中播放：。如果启用，照相机晃动将在世界中播放，并影响所有玩家。

World Inner Radius（世界内半径）。Float（单精度）。世界内部半径：。在这个半径内的玩家会得到全强度的相机抖动。

世界外半径。浮点（单精度）。世界外半径：。在此半径之外的玩家不会得到应用的相机抖动。

世界漂移指数。Float（单精度）。World Falloff Exponent:.世界衰减指数。描述内部和外部半径之间的抖动强度衰减曲线的指数。(1.0为线性）。