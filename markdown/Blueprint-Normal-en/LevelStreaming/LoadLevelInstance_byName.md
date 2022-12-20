# LoadLevelInstance_byName

Stream in a level with a specific location and rotation. You can create multiple instances of the same level!

The level to be loaded does not have to be in the persistent map's Levels list, however to ensure that the .umap does get. packaged, please be sure to include the .umap in your Packaging Settings:

Project Settings -> Packaging -> List of Maps to Include in a Packaged Build (you may have to show advanced or type in filter)

Target is Level Streaming Dynamic

## 图示

![]($-20221218-19423408.png)

## Inputs

In: Exec.

Level Name: String. Level package name to load, ex: /Game/Maps/MyMapName, specifying short name like MyMapName will force very slow search on disk.

Location: Vector. World space location where the level should be spawned.

Rotation: Rotator. World space rotation for rotating the entire level.

Optional Level Name Override: String. If set, the loaded level package have this name, which is used by other functions like UnloadStreamLevel. Note this is necessary for server and client networking because the level must have the same name on both..

Optional Level Streaming Class: Level Streaming Dynamic Class Reference. If set, the level streaming class will be used instead of ULevelStreamingDynamic.

Load as Temp Package: Boolean. If set, package path is prefixed by /Temp.  

## Outputs

Out: Exec.

Out Success: Boolean. Whether operation was successful (map was found and added to the sub-levels list).

Return Value: Level Streaming Dynamic Object Reference. Streaming level object for a level instance.

