# ApplyRadialDamagewithFalloff

伤害半径内的本地权威行为体。只会打击阻挡可见性通道的组件。

目标是游戏性的统计学

## 图示

![]($-20221218-19052942.png)

## Inputs

在。执行。

基本损害。浮点（单精度）。要应用的基本伤害，即在原点的伤害。

最小伤害。浮点（单精度）。

原产地。向量（由裁判）。破坏区域的震中...

损伤内半径。Float（单精度）。全部伤害区域的半径，从原点开始。

损伤外半径。Float（单精度）。最小伤害区域的半径，从原点开始。

损伤衰减。Float（单精度）。伤害从DamageInnerRadius到DamageOuterRadius的衰减指数。

伤害类型类。伤害类型类参考。描述所造成的损害的类。

忽略演员。演员对象参考数组。要忽略的演员列表。

损害造成者。Actor Object Reference.实际造成伤害的行为体（例如，爆炸的手榴弹）。

由控制器发起。控制器对象参考。负责造成该伤害的控制器（例如，投掷手榴弹的玩家）。

损害预防通道。ECollisionChannel Enum。如果原点和受害者之间有什么东西阻挡了这个通道上的痕迹，就不会对受害者施加伤害。  

## Outputs

出：执行。

返回值。布尔值。如果至少有一个演员受到了伤害，则为真。
