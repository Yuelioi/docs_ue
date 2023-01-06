# ApplyDamage

用一般的伤害来伤害指定的行为者。

目标是游戏性的统计学

## 图示

![]($-20221218-19052599.png)

## Inputs

在。执行。

损坏的演员。Actor Object Reference.将被损坏的演员。

基本损害。浮点（单精度）。应用的基本伤害。

事件唆使者。控制器对象参考。负责造成此伤害的控制器（例如，射击武器的玩家）。

损害造成者。Actor Object Reference.实际造成伤害的行为体（例如，爆炸的手榴弹）。

伤害类型类。伤害类型类参考。描述所造成的损害的类。  

## Outputs

出：执行。

返回值。浮点数（单精度）。最终应用在演员身上的实际伤害。

Hurts the specified actor with generic damage.

Target is Gameplay Statics

## 图示

![]($-20221218-19052599.png)

## Inputs

In: Exec.

Damaged Actor: Actor Object Reference. Actor that will be damaged..

Base Damage: Float (single-precision). The base damage to apply..

Event Instigator: Controller Object Reference. Controller that was responsible for causing this damage (e.g. player who shot the weapon).

Damage Causer: Actor Object Reference. Actor that actually caused the damage (e.g. the grenade that exploded).

Damage Type Class: Damage Type Class Reference. Class that describes the damage that was done..  

## Outputs

Out: Exec.

Return Value: Float (single-precision). Actual damage the ended up being applied to the actor..

