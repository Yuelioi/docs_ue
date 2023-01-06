# GetReferencers_Message

获取一个引用所提供包的包的列表。(仅在磁盘上引用)

目标是资产注册处

## 图示

![]($-20221218-18004712.png)

## Inputs

在。执行。

目标。对象参考。

包名称。名称。收集依赖关系的包的名称（例如，/Game/MyFolder/MyAsset）。

参考选项。资产注册表依赖性选项结构（通过参考）。在输出列表中包括哪些种类的参考。 

## Outputs

输出。执行：执行。

Out Referencers。名称的数组。引用路径为PackageName的包的列表。

返回值。布尔值。

Gets a list of packages that reference the supplied package. (On disk references ONLY)

Target is Asset Registry

## 图示

![]($-20221218-18004712.png)

## Inputs

In: Exec.

Target: Object Reference.

Package Name: Name. the name of the package for which to gather dependencies (eg, /Game/MyFolder/MyAsset).

Reference Options: Asset Registry Dependency Options Structure (by ref). which kinds of references to include in the output list.  

## Outputs

Out: Exec.

Out Referencers: Array of Names. a list of packages that reference the package whose path is PackageName.

Return Value: Boolean.

