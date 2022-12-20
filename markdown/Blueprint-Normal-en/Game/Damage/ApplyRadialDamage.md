# ApplyRadialDamage

Hurt locally authoritative actors within the radius. Will only hit components that block the Visibility channel.

Target is Gameplay Statics

## 图示

![]($-20221218-19052828.png)

## Inputs

In: Exec.

Base Damage: Float (single-precision). The base damage to apply, i.e. the damage at the origin..

Origin: Vector (by ref). Epicenter of the damage area..

Damage Radius: Float (single-precision). Radius of the damage area, from Origin.

Damage Type Class: Damage Type Class Reference. Class that describes the damage that was done..

Ignore Actors: Array of Actor Object References. List of Actors to ignore.

Damage Causer: Actor Object Reference. Actor that actually caused the damage (e.g. the grenade that exploded). This actor will not be damaged and it will not block damage..

Instigated by Controller: Controller Object Reference. Controller that was responsible for causing this damage (e.g. player who threw the grenade).

Do Full Damage: Boolean.

Damage Prevention Channel: ECollisionChannel Enum. Damage will not be applied to victim if there is something between the origin and the victim which blocks traces on this channel.  

## Outputs

Out: Exec.

Return Value: Boolean. true if damage was applied to at least one actor..

