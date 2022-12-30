# AddLeveltoWorld

Adds the named level package to the world. Does nothing if the level already exists in the world.

Target is Editor Level Utils

## 图示

![]($-20221218-18502770.png)

## Inputs

In: Exec.

World: World Object Reference.

Level Package Name: String. The package name ("e.g /Game/MyLevel") of the level package to add..

Level Streaming Class: Level Streaming Class Reference. The streaming class type to use for the level..  

## Outputs

Out: Exec.

Return Value: Level Streaming Object Reference. The new level, or NULL if the level couldn't added..

