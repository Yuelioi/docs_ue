# BreakRadialDamageParams

添加一个节点，将'RadialDamageParams'分解成其成员字段

## 图示

![]($-20221218-14413725.png)

## Inputs

径向损伤参数。径向伤害参数结构（按参考）。  

## Outputs

基本损害。浮点（单精度）。基本伤害：。造成的最大伤害。

最小伤害。浮点（单精度）。最小伤害：。如果在范围内，伤害不会低于此值。

内半径。Float（单精度）。Inner Radius:。在InnerRadius内，造成最大伤害。

外半径。Float（单精度）。外半径：。在OuterRadius之外，不做任何破坏。

损伤衰减。浮点（单精度）。伤害衰减：。描述指数型伤害衰减的数量。
