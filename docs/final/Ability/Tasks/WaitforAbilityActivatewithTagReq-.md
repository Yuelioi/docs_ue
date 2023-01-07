# WaitforAbilityActivatewithTagReq-

等到一个新的能力（相同或不同类型）被激活。除非 IncludeTriggeredAbilities 为真，否则只有基于输入的能力才会被计算在内。使用一个标签要求结构来过滤能力。

目标是能力 任务 等待 能力 激活

## 图示

![](/uploads/projects/ue-bluprint/20221218-17332475.png)

## Inputs

在。执行。

标签要求。游戏性标签要求结构。

包括触发的能力。布尔值。

触发一次：布尔值。

## Outputs

出场。执行：执行。

Async Task: Ability Task Wait Ability Activate Object Reference.

激活时。执行：执行。激活时。

Activated Ability: Gameplay Ability 对象参考。

<hr>

Wait until a new ability (of the same or different type) is activated. Only input based abilities will be counted unless IncludeTriggeredAbilities is true. Uses a tag requirements structure to filter abilities.

Target is Ability Task Wait Ability Activate

## 图示

![](/uploads/projects/ue-bluprint/20221218-17332475.png)

## Inputs

In: Exec.

Tag Requirements: Gameplay Tag Requirements Structure.

Include Triggered Abilities: Boolean.

Trigger Once: Boolean.

## Outputs

Out: Exec.

Async Task: Ability Task Wait Ability Activate Object Reference.

On Activate: Exec. On Activate.

Activated Ability: Gameplay Ability Object Reference.
