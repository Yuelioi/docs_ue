# HasTag

检查标签容器是否有指定的标签

目标是蓝图游戏性标签库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19093857.png)

## Inputs

标签容器。游戏中的标签容器结构（通过参考）。检查标签的容器。

标签。游戏性标签结构。容器中要检查的标签。

完全匹配。布尔值。如果为真，则标签必须完全存在；如果为假，则 TagContainer 在匹配时将包括它的父标签。

## Outputs

返回值。布尔值。如果容器有指定的标签，则为真，如果没有，则为假。

<hr>

Check if the tag container has the specified tag

Target is Blueprint Gameplay Tag Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19093857.png)

## Inputs

Tag Container: Gameplay Tag Container Structure (by ref). Container to check for the tag.

Tag: Gameplay Tag Structure. Tag to check for in the container.

Exact Match: Boolean. If true, the tag has to be exactly present, if false then TagContainer will include it's parent tags while matching.

## Outputs

Return Value: Boolean. True if the container has the specified tag, false if it does not.
