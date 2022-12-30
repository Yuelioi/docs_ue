# ApplyPointDamage

Hurts the specified actor with the specified impact.

Target is Gameplay Statics

## 图示

![]($-20221218-19052715.png)

## Inputs

In: Exec.

Damaged Actor: Actor Object Reference. Actor that will be damaged..

Base Damage: Float (single-precision). The base damage to apply..

Hit from Direction: Vector (by ref). Direction the hit came FROM.

Hit Info: Hit Result Structure (by ref). Collision or trace result that describes the hit.

Event Instigator: Controller Object Reference. Controller that was responsible for causing this damage (e.g. player who shot the weapon).

Damage Causer: Actor Object Reference. Actor that actually caused the damage (e.g. the grenade that exploded).

Damage Type Class: Damage Type Class Reference. Class that describes the damage that was done..  

## Outputs

Out: Exec.

Return Value: Float (single-precision). Actual damage the ended up being applied to the actor..

