# HasAllMatchingGameplayTags

检查资产是否有游戏标签，与所有指定的标签相匹配（扩展到包括资产标签的父代）。

目标是游戏性标签资产界面

## 图示

![](/uploads/projects/ue-bluprint/20221218-19092928.png)

## Inputs

目标。游戏性标签资产界面界面。

标签容器。游戏性的标签容器结构（由裁判）。标签容器，以检查是否匹配。

## Outputs

返回值。布尔值。如果资产符合所有的游戏标签，则为真，如果容器为空，则为真。

<hr>

Check if the asset has gameplay tags that matches against all of the specified tags (expands to include parents of asset tags)

Target is Gameplay Tag Asset Interface

## 图示

![](/uploads/projects/ue-bluprint/20221218-19092928.png)

## Inputs

Target: Gameplay Tag Asset Interface Interface.

Tag Container: Gameplay Tag Container Structure (by ref). Tag container to check for a match.

## Outputs

Return Value: Boolean. True if the asset has matches all of the gameplay tags, will be true if container is empty.
