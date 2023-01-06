# GetUserAbilityActivationInhibite-

这是指从输入的角度来抑制激活一个能力。(例如，菜单被拉起，另一个游戏机制正在消耗所有输入，等等）。这应该只在本地拥有的玩家身上调用。这不应该被用于游戏机制，如沉默或禁用。那些应该通过游戏效果来完成。

目标是能力系统组件

## 图示

![]($-20221218-17294247.png)

## Inputs

目标。能力系统组件对象参考。 

## Outputs

返回值。布尔值。这是为了从输入的角度来抑制激活一个能力。(例如，菜单被拉起，另一个游戏机制正在消耗所有输入，等等）。这应该只在本地拥有的玩家身上调用。这不应该被用于游戏机制，如沉默或禁用。这些应该通过游戏效果来完成。

This is meant to be used to inhibit activating an ability from an input perspective. (E.g., the menu is pulled up, another game mechanism is consuming all input, etc). This should only be called on locally owned players.. This should not be used to game mechanics like silences or disables. Those should be done through gameplay effects.

Target is Ability System Component

## 图示

![]($-20221218-17294247.png)

## Inputs

Target: Ability System Component Object Reference.  

## Outputs

Return Value: Boolean. This is meant to be used to inhibit activating an ability from an input perspective. (E.g., the menu is pulled up, another game mechanism is consuming all input, etc). This should only be called on locally owned players.. This should not be used to game mechanics like silences or disables. Those should be done through gameplay effects..

