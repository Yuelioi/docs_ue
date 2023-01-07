# IsGameplayCueActive

允许轮询以查看一个 GameplayCue 是否处于活动状态。我们希望大多数 GameplayCue 的处理都是基于事件的，但在某些情况下，我们可能需要检查 GamepalyCue 是否处于活动状态（例如，动画蓝图）。

目标是能力系统组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-19084019.png)

## Inputs

目标。能力系统组件对象参考。

游戏性提示标签。Gameplay Tag 结构。

## Outputs

返回值。布尔值。允许轮询以查看一个 GameplayCue 是否处于活动状态。我们希望大多数 GameplayCue 的处理都是基于事件的，但在某些情况下，我们可能需要检查 GamepalyCue 是否处于活动状态（例如，动画蓝图）。

<hr>

Allows polling to see if a GameplayCue is active. We expect most GameplayCue handling to be event based, but some cases we may need to check if a GamepalyCue is active (Animation Blueprint for example)

Target is Ability System Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-19084019.png)

## Inputs

Target: Ability System Component Object Reference.

Gameplay Cue Tag: Gameplay Tag Structure.

## Outputs

Return Value: Boolean. Allows polling to see if a GameplayCue is active. We expect most GameplayCue handling to be event based, but some cases we may need to check if a GamepalyCue is active (Animation Blueprint for example).
