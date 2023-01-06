# GetAllChannels

找到属于指定的UMovieSceneSection的所有通道。有些部分有很多通道（例如。Transforms包含9个双通道来表示平移/浮动/缩放），一个部分可能有混合通道类型。

目标是电影场景部分的扩展

## 图示

![]($-20221218-20521553.png)

## Inputs

在。执行。

节。电影场景部分对象参考。要使用的部分...

## Outputs

出：执行。

返回值。电影场景脚本通道对象引用数组。一个包含任何符合指定类型的关键通道的数组。

Find all channels that belong to the specified UMovieSceneSection. Some sections have many channels (such as. Transforms containing 9 double channels to represent Translation/Rotation/Scale), and a section may have mixed. channel types.

Target is Movie Scene Section Extensions

## 图示

![]($-20221218-20521553.png)

## Inputs

In: Exec.

Section: Movie Scene Section Object Reference. The section to use..  

## Outputs

Out: Exec.

Return Value: Array of Movie Scene Scripting Channel Object References. An array containing any key channels that match the type specified.

