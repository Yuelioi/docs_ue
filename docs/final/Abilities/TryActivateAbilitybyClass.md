# TryActivateAbilitybyClass

试图激活传入的能力。在这样做之前，它将检查成本和要求。如果它认为已经激活，则返回真，但由于激活过程中的失败，它可能会返回假阳性。如果 bAllowRemoteActivation 为真，它将远程激活本地/服务器能力，如果为假，它将只尝试本地激活该能力。

目标是能力系统组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-17295345.png)

## Inputs

在。执行。

目标。能力系统组件对象参考。

在能力激活。游戏性能力类参考。

允许远程激活。Boolean（布尔）。

## Outputs

输出。执行：执行。

返回值。布尔值。试图激活传入的能力。在这样做之前，它将检查成本和要求。如果它认为已经激活，则返回真，但由于激活过程中的失败，它可能会返回假阳性。如果 bAllowRemoteActivation 为真，它将远程激活本地/服务器能力，如果为假，它将只尝试本地激活该能力。

<hr>

Attempts to activate the ability that is passed in. This will check costs and requirements before doing so.. Returns true if it thinks it activated, but it may return false positives due to failure later in activation.. If bAllowRemoteActivation is true, it will remotely activate local/server abilities, if false it will only try to locally activate the ability

Target is Ability System Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-17295345.png)

## Inputs

In: Exec.

Target: Ability System Component Object Reference.

In Ability to Activate: Gameplay Ability Class Reference.

Allow Remote Activation: Boolean.

## Outputs

Out: Exec.

Return Value: Boolean. Attempts to activate the ability that is passed in. This will check costs and requirements before doing so.. Returns true if it thinks it activated, but it may return false positives due to failure later in activation.. If bAllowRemoteActivation is true, it will remotely activate local/server abilities, if false it will only try to locally activate the ability.
