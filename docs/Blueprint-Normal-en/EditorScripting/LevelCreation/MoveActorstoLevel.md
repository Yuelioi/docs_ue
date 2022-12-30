# MoveActorstoLevel

Moves the specified list of actors to the specified streaming level. The new actors will be selected

Target is Editor Level Utils

## 图示

![]($-20221218-18503315.png)

## Inputs

In: Exec.

Actors to Move: Array of Actor Object References. List of actors to move.

Dest Streaming Level: Level Streaming Object Reference. The destination streaming level of the current world to move the actors to.

Warn About References: Boolean. Whether or not to show a modal warning about referenced actors that may no longer function after being moved.

Warn About Renaming: Boolean.  

## Outputs

Out: Exec.

Return Value: Integer. The number of actors that were successfully moved to the new level.

