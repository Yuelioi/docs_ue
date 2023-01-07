# TryActivateAbility

试图激活给定的能力，在这样做之前会检查成本和要求。如果它认为已经激活，则返回 "true"，但由于激活过程中的失败，它可能会返回 "假阳性"。如果 bAllowRemoteActivation 为真，它将远程激活本地/服务器能力，如果为假，它将只尝试本地激活该能力。

目标是能力系统组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-17295225.png)

## Inputs

在。执行。

目标。能力系统组件对象参考。

激活的能力。游戏性能力规格处理结构。

允许远程激活。布尔值。

## Outputs

输出。执行：执行。

返回值。布尔值。试图激活给定的能力，在这样做之前会检查成本和要求。如果它认为已经激活，则返回真，但由于激活过程中的失败，它可能会返回假阳性。如果 bAllowRemoteActivation 为真，它将远程激活本地/服务器能力，如果为假，它将只尝试本地激活该能力。

<hr>

Attempts to activate the given ability, will check costs and requirements before doing so.. Returns true if it thinks it activated, but it may return false positives due to failure later in activation.. If bAllowRemoteActivation is true, it will remotely activate local/server abilities, if false it will only try to locally activate the ability

Target is Ability System Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-17295225.png)

## Inputs

In: Exec.

Target: Ability System Component Object Reference.

Ability to Activate: Gameplay Ability Spec Handle Structure.

Allow Remote Activation: Boolean.

## Outputs

Out: Exec.

Return Value: Boolean. Attempts to activate the given ability, will check costs and requirements before doing so.. Returns true if it thinks it activated, but it may return false positives due to failure later in activation.. If bAllowRemoteActivation is true, it will remotely activate local/server abilities, if false it will only try to locally activate the ability.
