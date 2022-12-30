# MakeRadialDamageParams

添加一个节点，从其成员中创建一个 "RadialDamageParams"。

## 图示

![]($-20221218-14594953.png)

## Inputs

基本损害。浮点（单精度）。基本伤害：。造成的最大伤害。

最小伤害。浮点（单精度）。最小伤害：。如果在范围内，伤害不会低于此值。

内半径。Float（单精度）。Inner Radius:。在InnerRadius内，造成最大伤害。

外半径。Float（单精度）。外半径：。在OuterRadius之外，不做任何伤害。

损伤衰减。浮点（单精度）。伤害衰减：。描述指数型伤害衰减的数量。  

## Outputs

径向损伤参数。径向损伤参数结构。
