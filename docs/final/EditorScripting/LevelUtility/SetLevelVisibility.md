# SetLevelVisibility

在编辑器中设置一个关卡的可见性。当同时改变多个关卡的可见性时，效率不如 SetLevelsVisibility。

目标是编辑水平的利用

## 图示

![](/uploads/projects/ue-bluprint/20221218-18514125.png)

## Inputs

在。执行。

水平。等级对象参考。要修改的级别...

应该是可见的。布尔值。关卡的新的可见性状态...

强制可见的层数。布尔值。如果为真，并且关卡是可见的，则强制关卡的层是可见的。

修改模式。ELevelVisibilityDirtyMode Enum.ELevelVisibilityDirtyMode 模式值...

## Outputs

出：执行。

<hr>

Sets a level's visibility in the editor. Less efficient than SetLevelsVisibility when changing the visibility of multiple levels simultaneously.

Target is Editor Level Utils

## 图示

![](/uploads/projects/ue-bluprint/20221218-18514125.png)

## Inputs

In: Exec.

Level: Level Object Reference. The level to modify..

Should be Visible: Boolean. The level's new visibility state..

Force Layers Visible: Boolean. If true and the level is visible, force the level's layers to be visible..

Modify Mode: ELevelVisibilityDirtyMode Enum. ELevelVisibilityDirtyMode mode value..

## Outputs

Out: Exec.
