# GetDependencies

获取一个由提供的包所引用的对象的路径列表。(仅限磁盘上的引用）。

目标是资产注册处

## 图示

![]($-20221218-18004371.png)

## Inputs

在。执行。

目标。资产注册处界面。

包名称。名称。收集依赖关系的包的名称（例如，/Game/MyFolder/MyAsset）。

Dependency Options: 资产注册处的依赖性选项结构（通过参考）。在输出列表中包括哪种依赖性。 

## Outputs

输出。执行：执行。

Out Dependencies。名称数组。被路径为PackageName的包所引用的包的列表。

返回值。布尔值。
