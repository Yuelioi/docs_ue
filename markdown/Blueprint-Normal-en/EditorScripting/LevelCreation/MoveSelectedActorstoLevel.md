# MoveSelectedActorstoLevel

Moves the currently selected actors to the specified streaming level. The new actors will be selected

Target is Editor Level Utils

## 图示

![]($-20221218-18503448.png)

## Inputs

In: Exec.

Dest Level: Level Streaming Object Reference.

Warn About References: Boolean. Whether or not to show a modal warning about referenced actors that may no longer function after being moved.  

## Outputs

Out: Exec.

Return Value: Integer. The number of actors that were successfully moved to the new level.

