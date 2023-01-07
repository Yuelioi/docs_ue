# ImportAsset

调用这个程序来启动一个资产导入过程，调用者必须指定一个源数据。这个导入过程可以导入许多不同的资产，但都在游戏内容中。

目标是交换经理

## 图示

![](/uploads/projects/ue-bluprint/20221218-19311597.png)

## Inputs

在。执行。

目标：交换管理器对象参考。

内容路径。字符串。要导入资产的内容路径。

源数据。交换源数据对象参考。我们要翻译的源数据输入。

导入资产参数。导入资产参数结构（通过参考）。我们需要传递给导入资产函数的所有导入资产参数。

## Outputs

出：执行。

返回值。布尔值。如果导入成功则为 true，否则为 false。

<hr>

Call this to start an import asset process, the caller must specify a source data.. This import process can import many different asset, but all in the game content.

Target is Interchange Manager

## 图示

![](/uploads/projects/ue-bluprint/20221218-19311597.png)

## Inputs

In: Exec.

Target: Interchange Manager Object Reference.

Content Path: String. The content path where to import the assets.

Source Data: Interchange Source Data Object Reference. The source data input we want to translate.

Import Asset Parameters: Import Asset Parameters Structure (by ref). All import asset parameter we need to pass to the import asset function.

## Outputs

Out: Exec.

Return Value: Boolean. true if the import succeed, false otherwise..
