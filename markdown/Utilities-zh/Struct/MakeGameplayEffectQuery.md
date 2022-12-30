# MakeGameplayEffectQuery

添加一个节点，从其成员中创建一个 "GameplayEffectQuery"。

## 图示

![]($-20221218-14533470.png)

## Inputs

Custom Match Delegate BP: 委托。自定义匹配代表BP:.BP公开的代表，用于提供自定义匹配条件。

拥有标签查询。Gameplay标签查询结构。拥有的标签查询：。与这个GE给出的标签相匹配的查询。

效果标签查询。Gameplay标签查询结构。效果标签查询：。与该GE拥有的标签相匹配的查询。

来源标签查询。Gameplay标签查询结构。源标签查询：。与此GE的源头所具有的标签相匹配的查询。

修改属性。游戏属性结构。修改属性:.匹配修改给定属性的GameplayEffects。

效果来源。对象参考。效果来源：。与来自该源的GameplayEffects相匹配。

效果的定义。游戏效果类参考。效果定义：。与此定义的GameplayEffects相匹配。  

## Outputs

游戏效果查询。游戏效果查询结构。
