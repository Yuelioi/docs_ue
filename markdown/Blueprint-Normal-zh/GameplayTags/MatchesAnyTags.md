# MatchesAnyTags

确定TagOne是否与OtherContainer中的任何标签相匹配

目标是蓝图游戏性标签库

## 图示

![]($-20221218-19094811.png)

## Inputs

标签一：游戏化标签结构。标签要检查是否匹配。

其他容器。Gameplay Tag 容器结构（通过参考）。容器要对照检查。

完全匹配。布尔值。如果为真，标签必须完全存在，如果为假，那么TagOne在匹配时将包括它的父标签。  

## Outputs

返回值。布尔值。如果TagOne与OtherContainer中明确存在的任何标签匹配，则为真。
