# ApplyRadialDamagewithFalloff

伤害半径内的本地权威行为体。只会打击阻挡可见性通道的组件。

目标是游戏性的统计学

## 图示

![](/uploads/projects/ue-bluprint/20221218-19052942.png)

## Inputs

在。执行。

基本损害。浮点（单精度）。要应用的基本伤害，即在原点的伤害。

最小伤害。浮点（单精度）。

原产地。向量（由裁判）。破坏区域的震中...

损伤内半径。Float（单精度）。全部伤害区域的半径，从原点开始。

损伤外半径。Float（单精度）。最小伤害区域的半径，从原点开始。

损伤衰减。Float（单精度）。伤害从 DamageInnerRadius 到 DamageOuterRadius 的衰减指数。

伤害类型类。伤害类型类参考。描述所造成的损害的类。

忽略演员。演员对象参考数组。要忽略的演员列表。

损害造成者。Actor Object Reference.实际造成伤害的行为体（例如，爆炸的手榴弹）。

由控制器发起。控制器对象参考。负责造成该伤害的控制器（例如，投掷手榴弹的玩家）。

损害预防通道。ECollisionChannel Enum。如果原点和受害者之间有什么东西阻挡了这个通道上的痕迹，就不会对受害者施加伤害。

## Outputs

出：执行。

返回值。布尔值。如果至少有一个演员受到了伤害，则为真。

<hr>

Hurt locally authoritative actors within the radius. Will only hit components that block the Visibility channel.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-19052942.png)

## Inputs

In: Exec.

Base Damage: Float (single-precision). The base damage to apply, i.e. the damage at the origin..

Minimum Damage: Float (single-precision).

Origin: Vector (by ref). Epicenter of the damage area..

Damage Inner Radius: Float (single-precision). Radius of the full damage area, from Origin.

Damage Outer Radius: Float (single-precision). Radius of the minimum damage area, from Origin.

Damage Falloff: Float (single-precision). Falloff exponent of damage from DamageInnerRadius to DamageOuterRadius.

Damage Type Class: Damage Type Class Reference. Class that describes the damage that was done..

Ignore Actors: Array of Actor Object References. List of Actors to ignore.

Damage Causer: Actor Object Reference. Actor that actually caused the damage (e.g. the grenade that exploded).

Instigated by Controller: Controller Object Reference. Controller that was responsible for causing this damage (e.g. player who threw the grenade).

Damage Prevention Channel: ECollisionChannel Enum. Damage will not be applied to victim if there is something between the origin and the victim which blocks traces on this channel.

## Outputs

Out: Exec.

Return Value: Boolean. true if damage was applied to at least one actor..
