# NewLevelfromTemplate

Close the current Persistent Level (without saving it). Create a new Level base on another level and save it. Load the new created level.

Target is Level Editor Subsystem

## 图示

![]($-20221218-18511495.png)

## Inputs

In: Exec.

Target: Level Editor Subsystem Object Reference.

Asset Path: String. Asset Path of where the level will be saved. ie. /Game/MyFolder/MyAsset.

Template Asset Path: String. Level to be used as Template. ie. /Game/MyFolder/MyAsset.  

## Outputs

Out: Exec.

Return Value: Boolean. True if the operation succeeds..

