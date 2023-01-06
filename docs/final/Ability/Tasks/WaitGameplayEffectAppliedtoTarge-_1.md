# WaitGameplayEffectAppliedtoTarge-_1

等到所有者（或外部所有者）对一个目标（目标也可能是所有者！）施加一个游戏效果。如果TriggerOnce为真，这个任务将只返回一次。否则，在能力的有效期内，每次应用GE时，它都会返回，并满足要求。可选的外部所有者可以用来对其他人（不是能力的所有者）运行这个任务。默认情况下，你可以将其留空。

目标是能力任务等待游戏效果应用目标

## 图示

![]($-20221218-17334475.png)

## Inputs

在。执行。

源过滤器。Gameplay 目标数据过滤手柄结构。

Source Tag Query（源标签查询）。Gameplay Tag Query结构。

Target Tag Query（目标标签查询）。Gameplay Tag Query结构。

Trigger Once: Boolean.

可选的外部所有者：演员对象参考。

Listen for Periodic Effect：布尔值。 

## Outputs

输出。执行：执行。

Async Task: Ability Task Wait Gameplay Effect Applied Target Object Reference.

在应用时。执行：执行。在应用中。

目标。演员对象参考。

Spec Handle。Gameplay Effect Spec Handle结构。

Active Handle（活动手柄）。活动的游戏效果手柄结构。

Wait until the owner (or External Owner) applies a GameplayEffect to a Target (the target may be the owner too!). If TriggerOnce is true, this task will only return one time. Otherwise it will return everytime a GE is applied that meets the requirements over the life of the ability. Optional External Owner can be used to run this task on someone else (not the owner of the ability). By default you can leave this empty.

Target is Ability Task Wait Gameplay Effect Applied Target

## 图示

![]($-20221218-17334475.png)

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

Async Task: Ability Task Wait Gameplay Effect Applied Target Object Reference.

On Applied: Exec. On Applied.

Target: Actor Object Reference.

Spec Handle: Gameplay Effect Spec Handle Structure.

Active Handle: Active Gameplay Effect Handle Structure.

