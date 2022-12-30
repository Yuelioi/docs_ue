# BreakGameplayEffectQuery

添加一个节点，将'GameplayEffectQuery'分解成其成员字段

## 图示

![]($-20221218-14363937.png)

## Inputs

游戏效果查询。游戏效果查询结构（通过引用）。 

## Outputs

Custom Match Delegate BP: 代表。Custom Match Delegate BP:.BP公开的委托，用于提供自定义匹配条件。

Owning Tag Query: Gameplay Tag Query Structure. Owning Tag Query: 拥有标签查询：。与该GE给出的标签相匹配的查询。

效果标签查询。Gameplay Tag Query结构。效果标签查询：。与此GE的标签相匹配的查询。

Source Tag Query（来源标签查询）。Gameplay标签查询结构。Source Tag Query:（源标签查询）。与此GE的源标签相匹配的查询。

Modifying Attribute（修改属性）。Gameplay Attribute结构。Modifying Attribute:.修改属性。匹配修改给定属性的GameplayEffects。

效果来源。对象参考。效果来源：。匹配来自这个来源的游戏效果。

Effect Definition（效果定义）。游戏效果类参考。效果定义：。匹配具有此定义的GameplayEffects。
