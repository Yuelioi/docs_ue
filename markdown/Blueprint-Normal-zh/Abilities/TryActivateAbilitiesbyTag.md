# TryActivateAbilitiesbyTag

试图激活每个符合给定标签和DoesAbilitySatisfyTagRequirements()的游戏能力。如果有东西试图激活，则返回true。可以激活一个以上的能力，并且该能力以后可能会失败。如果bAllowRemoteActivation为真，它将远程激活本地/服务器能力，如果为假，它将只尝试本地激活能力。

目标是能力系统组件

## 图示

![]($-20221218-17295106.png)

## Inputs

在。执行。

目标。能力系统组件对象参考。

Gameplay Tag Container。游戏标签容器结构（通过参考）。

允许远程激活。布尔值。 

## Outputs

输出。执行：执行。

返回值。布尔值。试图激活每个符合给定标签和DoesAbilitySatisfyTagRequirements()的游戏能力。如果有东西试图激活，则返回true。可以激活一个以上的能力，并且该能力以后可能会失败。如果bAllowRemoteActivation为真，它将远程激活本地/服务器能力，如果为假，它将只尝试本地激活能力。
