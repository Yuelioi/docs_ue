# MakeAIDamageEvent

Adds a node that create a 'AIDamageEvent' from its members

## 图示

![]($-20221218-14462859.png)

## Inputs

Amount: Float (single-precision). Amount:. Damage taken by DamagedActor.. @Note 0-damage events do not get ignored.

Location: Vector. Location:. Event's "Location", or what will be later treated as the perceived location for this sense.. If not set, HitLocation will be used, if that is unset too DamagedActor's location.

Hit Location: Vector. Hit Location:. Event's additional spatial information. @TODO document.

Damaged Actor: Actor Object Reference. Damaged Actor:. Damaged actor.

Instigator: Actor Object Reference. Instigator:. Actor that instigated damage. Can be None.

Tag: Name. Tag:. Optional named identifier for the damage..  

## Outputs

AIDamage Event: AIDamage Event Structure.

