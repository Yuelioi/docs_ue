# SetLevelsVisibility

在编辑器中设置一个关卡的可见性。当同时改变多个关卡的可见性时，比SetLevelsVisibility更有效。

目标是编辑水平的利用

## 图示

![]($-20221218-18513996.png)

## Inputs

在。执行。

水平。级别对象引用的数组。要修改的级别。

应该是可见的。布尔运算的数组。每个关卡的新可见性状态。

强制可见的层数。布尔值。如果为真，并且关卡是可见的，则强制关卡的层是可见的。

修改模式。ELevelVisibilityDirtyMode Enum.ELevelVisibilityDirtyMode模式值...

## Outputs

出：执行。
Sets a level's visibility in the editor. More efficient than SetLevelsVisibility when changing the visibility of multiple levels simultaneously.

Target is Editor Level Utils

## 图示

![]($-20221218-18513996.png)

## Inputs

In: Exec.

Levels: Array of Level Object References. The levels to modify..

Should be Visible: Array of Booleans. The level's new visibility state for each level..

Force Layers Visible: Boolean. If true and the level is visible, force the level's layers to be visible..

Modify Mode: ELevelVisibilityDirtyMode Enum. ELevelVisibilityDirtyMode mode value..  

## Outputs

Out: Exec.

