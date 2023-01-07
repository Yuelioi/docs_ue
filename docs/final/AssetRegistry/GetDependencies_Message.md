# GetDependencies_Message

获取一个由提供的包所引用的对象的路径列表。(仅限磁盘上的引用）。

目标是资产注册处

## 图示

![](/uploads/projects/ue-bluprint/20221218-18004486.png)

## Inputs

在。执行。

目标。对象参考。

包名称。名称。收集依赖关系的包的名称（例如，/Game/MyFolder/MyAsset）。

依赖性选项。资产注册处的依赖选项结构（通过参考）。在输出列表中包括哪些类型的依赖。

## Outputs

输出。执行：执行。

Out Dependencies。名称数组。被路径为 PackageName 的包所引用的包的列表。

返回值。布尔值。

<hr>

Gets a list of paths to objects that are referenced by the supplied package. (On disk references ONLY)

Target is Asset Registry

## 图示

![](/uploads/projects/ue-bluprint/20221218-18004486.png)

## Inputs

In: Exec.

Target: Object Reference.

Package Name: Name. the name of the package for which to gather dependencies (eg, /Game/MyFolder/MyAsset).

Dependency Options: Asset Registry Dependency Options Structure (by ref). which kinds of dependencies to include in the output list.

## Outputs

Out: Exec.

Out Dependencies: Array of Names. a list of packages that are referenced by the package whose path is PackageName.

Return Value: Boolean.
