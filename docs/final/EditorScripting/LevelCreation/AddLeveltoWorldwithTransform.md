# AddLeveltoWorldwithTransform

将命名的关卡包添加到世界中的给定位置。如果该关卡已经存在于世界中，则不做任何处理。

目标是编辑水平的利用

## 图示

![](/uploads/projects/ue-bluprint/20221218-18502913.png)

## Inputs

在。执行。

世界。世界对象参考。

水平包名称。字符串。要添加的关卡包的包名（"e.g /Game/MyLevel"）。

水平流类。水平流媒体类参考。用于级别的流媒体类别类型。

水平转换。转化（由裁判）。世界上新水平的起源...

## Outputs

出：执行。

返回值。关卡流对象参考。新的级别，如果不能添加级别，则为 NULL。

<hr>

Adds the named level package to the world at the given position. Does nothing if the level already exists in the world.

Target is Editor Level Utils

## 图示

![](/uploads/projects/ue-bluprint/20221218-18502913.png)

## Inputs

In: Exec.

World: World Object Reference.

Level Package Name: String. The package name ("e.g /Game/MyLevel") of the level package to add..

Level Streaming Class: Level Streaming Class Reference. The streaming class type to use for the level..

Level Transform: Transform (by ref). The origin of the new level in the world..

## Outputs

Out: Exec.

Return Value: Level Streaming Object Reference. The new level, or NULL if the level couldn't added..
