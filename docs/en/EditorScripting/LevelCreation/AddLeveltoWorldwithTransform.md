# AddLeveltoWorldwithTransform

Adds the named level package to the world at the given position. Does nothing if the level already exists in the world.

Target is Editor Level Utils

## 图示

![]($-20221218-18502913.png)

## Inputs

In: Exec.

World: World Object Reference.

Level Package Name: String. The package name ("e.g /Game/MyLevel") of the level package to add..

Level Streaming Class: Level Streaming Class Reference. The streaming class type to use for the level..

Level Transform: Transform (by ref). The origin of the new level in the world..  

## Outputs

Out: Exec.

Return Value: Level Streaming Object Reference. The new level, or NULL if the level couldn't added..

