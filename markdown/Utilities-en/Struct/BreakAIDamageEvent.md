# BreakAIDamageEvent

Adds a node that breaks a 'AIDamageEvent' into its member fields

## 图示

![]($-20221218-14304431.png)

## Inputs

AIDamage Event: AIDamage Event Structure (by ref).  

## Outputs

Amount: Float (single-precision). Amount:. Damage taken by DamagedActor.. @Note 0-damage events do not get ignored.

Location: Vector. Location:. Event's "Location", or what will be later treated as the perceived location for this sense.. If not set, HitLocation will be used, if that is unset too DamagedActor's location.

Hit Location: Vector. Hit Location:. Event's additional spatial information. @TODO document.

Damaged Actor: Actor Object Reference. Damaged Actor:. Damaged actor.

Instigator: Actor Object Reference. Instigator:. Actor that instigated damage. Can be None.

Tag: Name. Tag:. Optional named identifier for the damage..

