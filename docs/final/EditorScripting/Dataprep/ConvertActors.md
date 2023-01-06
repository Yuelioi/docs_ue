# ConvertActors

在关卡中用一个新的ActorClass类型的演员替换所有提供的演员。销毁所有提供的行为体。

目标是编辑演员子系统

## 图示

![]($-20221218-18484535.png)

## Inputs

在。执行。

目标。编辑器演员子系统对象参考。

演员。演员对象参考数组。替换的演员列表...

行为者类。Actor Class Reference.新演员的类别/蓝图，将被生成...

静态网格包路径。字符串。如果列表中包含画笔，并要求将其改为静态网格，则静态网格包路径是创建静态网格的包路径，即：/Game/MyFolder/。

## Outputs

出：执行。

返回值。角色对象引用的数组。
Replace in the level all Actors provided with a new actor of type ActorClass. Destroy all Actors provided.

Target is Editor Actor Subsystem

## 图示

![]($-20221218-18484535.png)

## Inputs

In: Exec.

Target: Editor Actor Subsystem Object Reference.

Actors: Array of Actor Object References. List of Actors to replace..

Actor Class: Actor Class Reference. Class/Blueprint of the new actor that will be spawn..

Static Mesh Package Path: String. If the list contains Brushes and it is requested to change them to StaticMesh, StaticMeshPackagePath is the package path to where the StaticMesh will be created. ie. /Game/MyFolder/.  

## Outputs

Out: Exec.

Return Value: Array of Actor Object References.

