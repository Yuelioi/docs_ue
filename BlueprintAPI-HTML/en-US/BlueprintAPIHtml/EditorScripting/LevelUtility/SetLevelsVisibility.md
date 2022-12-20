# SetLevelsVisibility

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

