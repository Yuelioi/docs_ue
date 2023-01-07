# ValidatePath

验证构成路径的部分不包含操作系统规定的无效字符。请注意，这是与 FPpackageName 不同的一套限制。

目标是蓝图路径库

## 图示

![](/uploads/projects/ue-bluprint/20221218-14283306.png)

## Inputs

在 Path 中。字符串。要验证的路径。

## Outputs

Did Succeed（成功）。布尔值。路径是否能被验证。

输出原因。文本。如果验证失败，则填写失败原因。

<hr>

Validates that the parts that make up the path contain no invalid characters as dictated by the operating system. Note that this is a different set of restrictions to those imposed by FPackageName

Target is Blueprint Paths Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-14283306.png)

## Inputs

In Path: String. path to validate.

## Outputs

Did Succeed: Boolean. Whether the path could be validated.

Out Reason: Text. If validation fails, this is filled with the failure reason.
