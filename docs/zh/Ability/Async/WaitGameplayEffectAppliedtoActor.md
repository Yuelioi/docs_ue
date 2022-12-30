# WaitGameplayEffectAppliedtoActor

等待，直到一个游戏效果被应用到目标角色身上。如果TriggerOnce为真，这个动作将只激活一次。否则，在能力的生命周期内，每次应用GE时，它都会返回，并满足要求

目标是能力 异步等待应用游戏效果

## 图示

![]($-20221218-17300744.png)

## Inputs

在。执行。

目标演员。Actor Object Reference.

源过滤器。Gameplay Target Data Filter Handle结构。

Source Tag Requirements（源标签要求）。Gameplay Tag Requirements结构。

目标标签要求。Gameplay Tag Requirements（游戏标签要求）结构。

触发一次：布尔值。

听取周期性效果：布尔值。 

## Outputs

输出。执行：执行。

Async Action: Ability Async Wait Gameplay Effect Applied Object Reference.

在应用时。Exec. 应用时：执行。

来源。Actor Object Reference.

Spec Handle。Gameplay Effect Spec Handle结构。

Active Handle（活动手柄）。活动的游戏效果手柄结构。
