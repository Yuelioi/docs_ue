# CreateNewStreamingLevel

Creates a new streaming level in the current world

Target is Editor Level Utils

## 图示

![]($-20221218-18503048.png)

## Inputs

In: Exec.

Level Streaming Class: Level Streaming Class Reference. The streaming class type instead to use for the level..

New Level Path: String. Optional path to the level package path format ("e.g /Game/MyLevel"). If empty, the user will be prompted during the save process..

Move Selected Actors Into New Level: Boolean. If true, move any selected actors into the new level..  

## Outputs

Out: Exec.

Return Value: Level Streaming Object Reference. Returns the newly created level, or NULL on failure.

