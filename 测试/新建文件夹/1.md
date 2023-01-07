# BreakGameplayEffectRemovalInfo

添加一个节点，将'GameplayEffectRemovalInfo'分解到其成员字段中

## 图示

![]($-20221218-14364025.png)

## Inputs

Gameplay Effect Removal Info。游戏效果移除信息结构（通过引用）。 

## Outputs

Premature Removal（过早移除）。布尔值。Premature Removal:（过早移除）。当游戏效果的持续时间没有过期时为真，意味着游戏效果被强行移除。

堆栈计数。整数。堆栈数：。这个游戏效果在被移除前拥有的堆栈数量。

Effect Context: Gameplay Effect Context Handle结构。Effect Context:. 这个游戏效果的目标是演员。
