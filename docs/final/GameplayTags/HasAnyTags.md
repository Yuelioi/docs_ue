# HasAnyTags

检查指定的标签容器是否有其他容器中的任何标签。

目标是蓝图游戏性标签库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19093518.png)

## Inputs

标签容器。游戏中的标签容器结构（通过参考）。容器，以检查它是否与其他容器中的任何标签相匹配。

其他容器。Gameplay Tag 容器结构（通过参考）。容器要对照检查。

完全匹配。布尔值。如果为真，则标签必须完全存在；如果为假，则 TagContainer 在匹配时将包括它的父标签。

## Outputs

返回值。布尔值。如果该容器有另一个容器中的任何标签，则为真。

<hr>

Check if the specified tag container has ANY of the tags in the other container

Target is Blueprint Gameplay Tag Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19093518.png)

## Inputs

Tag Container: Gameplay Tag Container Structure (by ref). Container to check if it matches any of the tags in the other container.

Other Container: Gameplay Tag Container Structure (by ref). Container to check against..

Exact Match: Boolean. If true, the tag has to be exactly present, if false then TagContainer will include it's parent tags while matching.

## Outputs

Return Value: Boolean. True if the container has ANY of the tags in the other container.
