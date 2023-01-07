# CreateAsset_Message

用指定的名称、路径和工厂创建一个资产。

目标是资产工具

## 图示

![](/uploads/projects/ue-bluprint/20221218-18473952.png)

## Inputs

在。执行。

目标。对象参考。

资产名称。字符串。新资产的名称。

包路径。字符串。将包含新资产的包。

资产类别。对象类别参考。新资产的类别。

工厂。工厂对象参考。将建立新资产的工厂。

Calling Context:名称：调用 CreateAsset()的模块或方法的可选名称--这将传递给工厂。

## Outputs

出：执行。

返回值。新资产的对象参考，如果失败则为 NULL。

<hr>

Creates an asset with the specified name, path, and factory

Target is Asset Tools

## 图示

![](/uploads/projects/ue-bluprint/20221218-18473952.png)

## Inputs

In: Exec.

Target: Object Reference.

Asset Name: String. the name of the new asset.

Package Path: String. the package that will contain the new asset.

Asset Class: Object Class Reference. the class of the new asset.

Factory: Factory Object Reference. the factory that will build the new asset.

Calling Context: Name. optional name of the module or method calling CreateAsset() - this is passed to the factory.

## Outputs

Out: Exec.

Return Value: Object Reference. the new asset or NULL if it fails.
