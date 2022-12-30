# BreakGameplayCueNotify_CameraLen-

添加一个节点，将'GameplayCueNotify_CameraLensEffectInfo'分解到其成员字段中。

## 图示

![]($-20221218-14362864.png)

## Inputs

Gameplay Cue Notify Camera Lens Effect Info。Gameplay Cue Notify Camera Lens Effect Info 结构（通过引用）。 

## Outputs

Spawn Condition Override: Gameplay Cue Notify Spawn Condition 结构。Spawn Condition Override:。在播放摄像机镜头效果前要检查的条件。

Placement Info Override（放置信息覆盖）。Gameplay Cue Notify Placement Info Structure. Placement Info Override（放置信息覆盖）：。定义摄像机镜头效果的放置方式。

Camera Lens Effect（摄像机镜头效果）。Actor Class Reference. Camera Lens Effect:.相机镜头效果。摄像机镜头效果的播放。

Override Spawn Condition（覆盖再生条件）。布尔值。Override Spawn Condition:.覆盖再生条件。如果启用，则使用重写产卵条件，而不是默认的。

Override Placement Info（覆盖位置信息）。布尔值。覆盖放置信息：。如果启用，使用放置信息覆盖，而不是默认的。

在世界中游戏。布尔值。在世界中播放：。如果启用，摄像机镜头效果将在世界中播放并影响所有玩家。

世界内部半径。Float（单精度）。世界内部半径：。在这个半径内的玩家会得到全强度的摄像机镜头效果。

世界外半径。浮点（单精度）。世界外半径：。在此半径之外的玩家不会得到相机镜头的效果。