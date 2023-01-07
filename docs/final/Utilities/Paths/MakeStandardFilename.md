# MakeStandardFilename

制作完全标准的 "Unreal "路径名。

- 规范化路径分隔符 [NormalizeFilename] 。

- 移除不相干的分隔符 [NormalizeDirectoryName，以及移除相邻的分隔符] 。

- 折叠内部的...。

- 使其相对于 Engine\Binaries\<Platform>（总是以.\.\.开始）。

目标是蓝图路径库

## 图示

![](/uploads/projects/ue-bluprint/20221218-14281148.png)

## Inputs

在路径中。字符串。

## Outputs

输出路径。字符串。

<hr>

Make fully standard "Unreal" pathname:

- Normalizes path separators [NormalizeFilename]

- Removes extraneous separators [NormalizeDirectoryName, as well removing adjacent separators]

- Collapses internal ..'s

- Makes relative to Engine\Binaries\<Platform> (will ALWAYS start with ..\\..\\..)

Target is Blueprint Paths Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-14281148.png)

## Inputs

In Path: String.

## Outputs

Out Path: String.
