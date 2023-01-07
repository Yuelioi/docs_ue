# MatchesTag

确定 TagOne 是否与 TagTwo 匹配

目标是蓝图游戏性标签库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19094923.png)

## Inputs

标签一：游戏化标签结构。标签要检查是否匹配。

标签二：游戏化标签结构。标签来检查匹配。

完全匹配。布尔值。如果为真，标签必须完全存在，如果为假，那么 TagOne 在匹配时将包括它的父标签。

## Outputs

返回值。布尔值。如果 TagOne 与 TagTwo 匹配，则为真。

<hr>

Determine if TagOne matches against TagTwo

Target is Blueprint Gameplay Tag Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19094923.png)

## Inputs

Tag One: Gameplay Tag Structure. Tag to check for match.

Tag Two: Gameplay Tag Structure. Tag to check match against.

Exact Match: Boolean. If true, the tag has to be exactly present, if false then TagOne will include it's parent tags while matching.

## Outputs

Return Value: Boolean. True if TagOne matches TagTwo.
