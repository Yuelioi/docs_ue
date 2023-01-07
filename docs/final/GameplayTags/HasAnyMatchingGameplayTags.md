# HasAnyMatchingGameplayTags

检查资产是否有与任何指定标签相匹配的游戏标签（扩展到包括资产标签的父标签）。

目标是游戏性标签资产界面

## 图示

![](/uploads/projects/ue-bluprint/20221218-19093280.png)

## Inputs

目标。游戏性标签资产界面界面。

标签容器。游戏性的标签容器结构（由裁判）。标签容器，以检查是否匹配。

## Outputs

返回值。布尔值。如果资产符合任何游戏标签，则为真，如果容器为空，则为假。

<hr>

Check if the asset has gameplay tags that matches against any of the specified tags (expands to include parents of asset tags)

Target is Gameplay Tag Asset Interface

## 图示

![](/uploads/projects/ue-bluprint/20221218-19093280.png)

## Inputs

Target: Gameplay Tag Asset Interface Interface.

Tag Container: Gameplay Tag Container Structure (by ref). Tag container to check for a match.

## Outputs

Return Value: Boolean. True if the asset has matches any of the gameplay tags, will be false if container is empty.
