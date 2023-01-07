# ImportScene

调用它来启动一个导入场景的过程，调用者必须指定一个源数据。这个导入过程可以导入许多不同的资产和它们的转换（USceneComponent），并将结果存储在一个蓝图中，然后将蓝图添加到关卡中。

目标是交换经理

## 图示

![](/uploads/projects/ue-bluprint/20221218-19311717.png)

## Inputs

在。执行。

目标：交换管理器对象参考。

内容路径。字符串。要导入资产的内容路径。

源数据。交换源数据对象参考。我们要翻译的源数据输入，这个对象将被复制以允许多线程安全操作。

导入资产参数。进口资产参数结构（按参考）。我们需要传递给导入资产函数的所有导入资产参数。

## Outputs

出：执行。

返回值。布尔值。如果导入成功则为 true，否则为 false。

<hr>

Call this to start an import scene process, the caller must specify a source data.. This import process can import many different asset and there transform (USceneComponent) and store the result in a blueprint and add the blueprint to the level.

Target is Interchange Manager

## 图示

![](/uploads/projects/ue-bluprint/20221218-19311717.png)

## Inputs

In: Exec.

Target: Interchange Manager Object Reference.

Content Path: String. The content path where to import the assets.

Source Data: Interchange Source Data Object Reference. The source data input we want to translate, this object will be duplicate to allow multithread safe operations.

Import Asset Parameters: Import Asset Parameters Structure (by ref). All import asset parameter we need to pass to the import asset function.

## Outputs

Out: Exec.

Return Value: Boolean. true if the import succeed, false otherwise..
