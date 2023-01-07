# GetChannelsbyType

找到属于指定的 UMovieSceneSection 的、符合特定类型的所有通道。这将为你过滤掉任何不继承于指定类型的子代。

目标是电影场景部分的扩展

## 图示

![](/uploads/projects/ue-bluprint/20221218-20522010.png)

## Inputs

在。执行。

节。电影场景部分对象参考。要使用的部分...

频道类型。电影场景脚本通道类参考。要寻找的类类型。

## Outputs

出：执行。

返回值。电影场景脚本通道对象引用数组。一个包含任何符合指定类型的关键通道的数组。

<hr>

Find all channels that belong to the specified UMovieSceneSection that match the specific type. This will filter out any children who do not inherit. from the specified type for you.

Target is Movie Scene Section Extensions

## 图示

![](/uploads/projects/ue-bluprint/20221218-20522010.png)

## Inputs

In: Exec.

Section: Movie Scene Section Object Reference. The section to use..

Channel Type: Movie Scene Scripting Channel Class Reference. The class type to look for..

## Outputs

Out: Exec.

Return Value: Array of Movie Scene Scripting Channel Object References. An array containing any key channels that match the type specified.
