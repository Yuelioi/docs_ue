# BreakEnhancedActionKeyMapping

添加一个节点，将'EnhancedActionKeyMapping'分解到其成员字段中。

## 图示

![]($-20221218-14354930.png)

## Inputs

Enhanced Action Key Mapping。增强的动作键映射结构（通过引用）。 

## Outputs

行动。输入行动对象参考。Action:. 受该键影响的行动。

键。键的结构。键:. 影响该动作的键。

Is Player Mappable: 布尔型。是玩家可映射的：。如果为真，这个ActionKeyMapping将作为一个玩家可绑定的键被公开。

播放器可映射选项。玩家可应用的按键选项结构。Player Mappable Options:. 使其成为一个可被玩家绑定的按键映射的选项。

Triggers（触发器）。输入触发器对象参考数组。Triggers: 触发器。触发器限定词。如果存在任何触发器限定词，映射将不会触发，除非：. 如果在这个列表中存在任何显式触发器，必须至少满足其中一个。此列表中的所有隐式触发器必须被满足。

修改器。输入修改器对象参考数组。修改器:. 应用于原始键值的修改器。这些是按数组顺序应用的。
