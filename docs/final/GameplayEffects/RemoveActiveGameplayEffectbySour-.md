# RemoveActiveGameplayEffectbySour-

移除活动的游戏效果，其支持定义是指定的游戏效果类。

目标是能力系统组件

## 图示

![]($-20221218-19090719.png)

## Inputs

在。执行。

目标。能力系统组件对象参考。

游戏效果。Gameplay Effect Class Reference。要移除的游戏效果的类别；如果为空，则无任何作用。

唆使者能力系统组件。能力系统组件对象参考。如果指定，将只删除应用于此教唆者能力系统组件的游戏效果。

要删除的堆栈。整数。要移除的堆栈的数量，-1表示全部移除。  

## Outputs

出：执行。

Remove active gameplay effects whose backing definition are the specified gameplay effect class

Target is Ability System Component

## 图示

![]($-20221218-19090719.png)

## Inputs

In: Exec.

Target: Ability System Component Object Reference.

Gameplay Effect: Gameplay Effect Class Reference. Class of gameplay effect to remove; Does nothing if left null.

Instigator Ability System Component: Ability System Component Object Reference. If specified, will only remove gameplay effects applied from this instigator ability system component.

Stacks to Remove: Integer. Number of stacks to remove, -1 means remove all.  

## Outputs

Out: Exec.

