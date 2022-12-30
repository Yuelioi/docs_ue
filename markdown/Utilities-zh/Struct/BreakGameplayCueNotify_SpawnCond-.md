# BreakGameplayCueNotify_SpawnCond-

添加一个打破'GameplayCueNotify_SpawnCondition'的节点到其成员字段中。

## 图示

![]($-20221218-14363676.png)

## Inputs

Gameplay Cue Notify Spawn Condition。Gameplay Cue Notify Spawn Condition 结构（通过引用）。 

## Outputs

本地控制的来源。EGameplayCueNotify_LocallyControlledSource枚举。本地控制的来源：。在确定是否为本地控制时使用的源行动者。

本地控制的政策。EGameplayCueNotify_LocallyControlledPolicy枚举。本地控制的政策：。用于确定游戏提示效果是否应该产生的本地控制策略。

游戏机会。Float（单精度）。播放机会：。播放效果的随机机会。(1.0=总是播放，0.0=从不播放）。

允许的表面类型。EPhysicalSurface枚举的数组。允许的表面类型：。只有当表面类型在这个列表中时，游戏的提示效果才会产生。一个空的列表意味着一切都被允许。

拒绝的表面类型。EPhysicalSurface枚举的数组。拒绝的表面类型：。只有当表面类型不在这个列表中时，游戏的提示效果才会产生。一个空的列表意味着没有东西会被拒绝。