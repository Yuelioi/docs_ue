# TryActivateAbilitiesbyTag

试图激活每个符合给定标签和 DoesAbilitySatisfyTagRequirements()的游戏能力。如果有东西试图激活，则返回 true。可以激活一个以上的能力，并且该能力以后可能会失败。如果 bAllowRemoteActivation 为真，它将远程激活本地/服务器能力，如果为假，它将只尝试本地激活能力。

目标是能力系统组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-17295106.png)

## Inputs

在。执行。

目标。能力系统组件对象参考。

Gameplay Tag Container。游戏标签容器结构（通过参考）。

允许远程激活。布尔值。

## Outputs

输出。执行：执行。

返回值。布尔值。试图激活每个符合给定标签和 DoesAbilitySatisfyTagRequirements()的游戏能力。如果有东西试图激活，则返回 true。可以激活一个以上的能力，并且该能力以后可能会失败。如果 bAllowRemoteActivation 为真，它将远程激活本地/服务器能力，如果为假，它将只尝试本地激活能力。

<hr>

Attempts to activate every gameplay ability that matches the given tag and DoesAbilitySatisfyTagRequirements().. Returns true if anything attempts to activate. Can activate more than one ability and the ability may fail later.. If bAllowRemoteActivation is true, it will remotely activate local/server abilities, if false it will only try to locally activate abilities.

Target is Ability System Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-17295106.png)

## Inputs

In: Exec.

Target: Ability System Component Object Reference.

Gameplay Tag Container: Gameplay Tag Container Structure (by ref).

Allow Remote Activation: Boolean.

## Outputs

Out: Exec.

Return Value: Boolean. Attempts to activate every gameplay ability that matches the given tag and DoesAbilitySatisfyTagRequirements().. Returns true if anything attempts to activate. Can activate more than one ability and the ability may fail later.. If bAllowRemoteActivation is true, it will remotely activate local/server abilities, if false it will only try to locally activate abilities..
