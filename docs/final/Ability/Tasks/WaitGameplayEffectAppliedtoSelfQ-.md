# WaitGameplayEffectAppliedtoSelfQ-

等待，直到所有者从给定的来源（来源也可能是所有者！）收到一个 GameplayEffect。如果 TriggerOnce 为真，这个任务将只返回一次。否则，在能力的生命周期内，每次应用符合要求的 GE 时，它都会返回。可选的外部所有者可以用来对其他人（不是能力的所有者）运行这个任务。默认情况下，你可以将其留空。

这个版本使用 FGameplayTagQuery（更强大）而不是 FGameplayTagRequirements（更快）。

目标是能力任务等待游戏效果应用自己

## 图示

![](/uploads/projects/ue-bluprint/20221218-17334209.png)

## Inputs

在。执行。

源过滤。游戏性目标数据过滤手柄结构。

源标签查询。Gameplay Tag Query 结构。

Target Tag Query（目标标签查询）。Gameplay Tag Query 结构。

Trigger Once: Boolean.

可选的外部所有者：演员对象参考。

Listen for Periodic Effect：布尔值。

## Outputs

输出。执行：执行。

Async Task: Ability Task Wait Gameplay Effect Applied Self Object Reference.

在应用。Exec. 在应用中。

来源。演员对象参考。

Spec Handle。Gameplay Effect Spec Handle 结构。

Active Handle（活动手柄）。活动的游戏效果手柄结构。

<hr>

Wait until the owner receives a GameplayEffect from a given source (the source may be the owner too!). If TriggerOnce is true, this task will only return one time. Otherwise it will return everytime a GE is applied that meets the requirements over the life of the ability. Optional External Owner can be used to run this task on someone else (not the owner of the ability). By default you can leave this empty.

This version uses FGameplayTagQuery (more power) instead of FGameplayTagRequirements (faster)

Target is Ability Task Wait Gameplay Effect Applied Self

## 图示

![](/uploads/projects/ue-bluprint/20221218-17334209.png)

## Inputs

In: Exec.

Source Filter: Gameplay Target Data Filter Handle Structure.

Source Tag Query: Gameplay Tag Query Structure.

Target Tag Query: Gameplay Tag Query Structure.

Trigger Once: Boolean.

Optional External Owner: Actor Object Reference.

Listen for Periodic Effect: Boolean.

## Outputs

Out: Exec.

Async Task: Ability Task Wait Gameplay Effect Applied Self Object Reference.

On Applied: Exec. On Applied.

Source: Actor Object Reference.

Spec Handle: Gameplay Effect Spec Handle Structure.

Active Handle: Active Gameplay Effect Handle Structure.
