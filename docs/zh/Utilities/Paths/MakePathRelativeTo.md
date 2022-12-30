# MakePathRelativeTo

假设两个路径（或文件名）都是相对于同一个基本目录的，将InPath转换为相对于InRelativeTo。

目标是蓝图路径库

## 图示

![]($-20221218-14280976.png)

## Inputs

In Path。字符串。要改变为与InRelativeTo相对的路径。

In Relative To: 字符串。用作新的相对基数的路径。 

## Outputs

Out Path: 字符串。

返回值。Boolean，如果OutPath被改变为相对路径，则为true。
