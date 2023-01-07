# MatchesAnyTags

确定 TagOne 是否与 OtherContainer 中的任何标签相匹配

目标是蓝图游戏性标签库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19094811.png)

## Inputs

标签一：游戏化标签结构。标签要检查是否匹配。

其他容器。Gameplay Tag 容器结构（通过参考）。容器要对照检查。

完全匹配。布尔值。如果为真，标签必须完全存在，如果为假，那么 TagOne 在匹配时将包括它的父标签。

## Outputs

返回值。布尔值。如果 TagOne 与 OtherContainer 中明确存在的任何标签匹配，则为真。

<hr>

Determine if TagOne matches against any tag in OtherContainer

Target is Blueprint Gameplay Tag Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19094811.png)

## Inputs

Tag One: Gameplay Tag Structure. Tag to check for match.

Other Container: Gameplay Tag Container Structure (by ref). Container to check against..

Exact Match: Boolean. If true, the tag has to be exactly present, if false then TagOne will include it's parent tags while matching.

## Outputs

Return Value: Boolean. True if TagOne matches any tags explicitly present in OtherContainer.
