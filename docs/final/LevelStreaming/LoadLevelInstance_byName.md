# LoadLevelInstance_byName

在一个具有特定位置和旋转的关卡中流动。你可以创建同一关卡的多个实例!

要加载的关卡不一定在持久性地图的关卡列表中，但是为了确保.umap被打包，请确保在打包设置中包括.umap。

项目设置 -> 打包 -> 打包构建中包含的地图列表（你可能需要显示高级或输入过滤器）。

目标是水平流动态

## 图示

![]($-20221218-19423408.png)

## Inputs

在。执行。

等级名称。字符串。要加载的级别包名称，例如：/Game/Maps/MyMapName，指定MyMapName这样的短名称将迫使在磁盘上进行非常缓慢的搜索。

地点：向量。向量。关卡应该被生成的世界空间位置。

旋转。旋转器。用于旋转整个关卡的世界空间旋转。

可选的级别名称重写。字符串。如果设置，加载的级别包有这个名字，这个名字被其他函数使用，比如UnloadStreamLevel。注意这对服务器和客户端联网是必要的，因为级别必须在两个地方有相同的名字。

可选的水平流类。Level Streaming Dynamic Class Reference。如果设置，将使用水平流类而不是ULevelStreamingDynamic。

作为Temp包加载。布尔值。如果设置，软件包路径以/Temp为前缀。  

## Outputs

出：执行。

出成功。布尔值。操作是否成功（地图被找到并添加到子层列表中）。

返回值。等级流动态对象参考。一个关卡实例的流式关卡对象。

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

