# SetLevelVisibility

Sets a level's visibility in the editor. Less efficient than SetLevelsVisibility when changing the visibility of multiple levels simultaneously.

Target is Editor Level Utils

## 图示

![]($-20221218-18514125.png)

## Inputs

In: Exec.

Level: Level Object Reference. The level to modify..

Should be Visible: Boolean. The level's new visibility state..

Force Layers Visible: Boolean. If true and the level is visible, force the level's layers to be visible..

Modify Mode: ELevelVisibilityDirtyMode Enum. ELevelVisibilityDirtyMode mode value..  

## Outputs

Out: Exec.

