# CompareImageAgainstReference

要求图像比较。

目标是自动化蓝图功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18093558.png)

## Inputs

在。执行。

图像文件路径。字符串。图像位置的绝对路径。引擎支持的所有 8bit RGBA 通道格式都被接受。

比较名称。字符串。可选的比较名称，默认使用 ImageFilePath 的基本名称。

比较公差。EComparisonTolerance Enum.

比较说明。字符串。

## Outputs

输出。执行。

返回值。布尔值。如果比较成功排队，则为真。

<hr>

request image comparison.

Target is Automation Blueprint Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18093558.png)

## Inputs

In: Exec.

Image File Path: String. Absolute path to the image location. All 8bit RGBA channels supported formats by the engine are accepted..

Comparison Name: String. Optional name for the comparison, by default the basename of ImageFilePath is used.

Comparison Tolerance: EComparisonTolerance Enum.

Comparison Notes: String.

## Outputs

Out: Exec.

Return Value: Boolean. True if comparison was successfully enqueued.
