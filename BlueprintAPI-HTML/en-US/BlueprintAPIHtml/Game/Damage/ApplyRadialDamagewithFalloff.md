# ApplyRadialDamagewithFalloff

Hurt locally authoritative actors within the radius. Will only hit components that block the Visibility channel.

Target is Gameplay Statics

## 图示

![]($-20221218-19052942.png)

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

