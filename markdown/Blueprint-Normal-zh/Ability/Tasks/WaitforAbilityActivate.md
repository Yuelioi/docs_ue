# WaitforAbilityActivate

等到一个新的能力（相同或不同类型）被激活。除非IncludeTriggeredAbilities为真，否则只有基于输入的能力才会被计算在内。

目标是能力 任务 等待 能力 激活

## 图示

![]($-20221218-17332223.png)

## Inputs

在。执行。

有标签。Gameplay Tag结构。

无标签。Gameplay Tag结构。

Include Triggered Abilities: 布尔值。

触发一次：布尔值。 

## Outputs

出场。执行：执行。

Async Task: Ability Task Wait Ability Activate Object Reference.

激活时。执行：执行。激活时。

激活的能力。Gameplay Ability 对象参考。
