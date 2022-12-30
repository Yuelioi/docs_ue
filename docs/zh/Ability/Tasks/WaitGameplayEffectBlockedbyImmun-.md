# WaitGameplayEffectBlockedbyImmun-

监听GE的豁免权。默认情况下，这意味着 "这个英雄因为豁免权而阻止了一个GE"。设置OptionalExternalTarget将监听外部目标上被阻挡的GE。注意这只在服务器上起作用。

目标是能力任务等待游戏效果被阻止的免疫力

## 图示

![]($-20221218-17334602.png)

## Inputs

在。执行。

源标签要求。游戏性标签要求结构。

目标标签要求。Gameplay标签要求结构。

可选的外部目标。演员对象参考。

Only Trigger Once：布尔值。 

## Outputs

输出。执行：执行。

异步任务。Ability Task Wait 游戏效果 Blocked Immunity Object Reference.

封锁。Exec. 阻断：执行。

被阻断规格。Gameplay Effect Spec Handle 结构。

Immunity Gameplay Effect Handle: 活跃的游戏效果手柄结构。
