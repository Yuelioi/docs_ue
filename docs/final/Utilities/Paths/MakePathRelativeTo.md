# MakePathRelativeTo

假设两个路径（或文件名）都是相对于同一个基本目录的，将 InPath 转换为相对于 InRelativeTo。

目标是蓝图路径库

## 图示

![](/uploads/projects/ue-bluprint/20221218-14280976.png)

## Inputs

In Path。字符串。要改变为与 InRelativeTo 相对的路径。

In Relative To: 字符串。用作新的相对基数的路径。

## Outputs

Out Path: 字符串。

返回值。Boolean，如果 OutPath 被改变为相对路径，则为 true。

<hr>

Assuming both paths (or filenames) are relative to the same base dir, converts InPath to be relative to InRelativeTo

Target is Blueprint Paths Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-14280976.png)

## Inputs

In Path: String. Path to change to be relative to InRelativeTo.

In Relative To: String. Path to use as the new relative base.

## Outputs

Out Path: String.

Return Value: Boolean. true if OutPath was changed to be relative.
