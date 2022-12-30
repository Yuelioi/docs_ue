# BreakAIDamageEvent

添加一个打破'AIDamageEvent'的节点到其成员字段中

## 图示

![]($-20221218-14304431.png)

## Inputs

AIDamage事件。AIDamage事件结构（通过引用）。 

## Outputs

金额。Float（单精度）。Amount:. DamagedActor受到的伤害。@注意 0-damage事件不会被忽略。

位置。矢量。Location:. 事件的 "位置"，或者以后将被视为这个意义上的感知位置。如果没有设置，将使用HitLocation，如果没有设置，则使用DamagedActor的位置。

击中位置。向量。击中位置：。事件的附加空间信息。@TODO文件。

损坏的演员。Actor Object Reference. Damaged Actor:. 被损坏的演员。

指导者。演员对象参考。教唆者:. 引发损害的行为者。可以是无。

标签。名称。标签:。损害的可选命名标识符。
