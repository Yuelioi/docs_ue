# MakeRadialDamageParams

Adds a node that create a 'RadialDamageParams' from its members

## 图示

![]($-20221218-14594953.png)

## Inputs

Base Damage: Float (single-precision). Base Damage:. Max damage done.

Minimum Damage: Float (single-precision). Minimum Damage:. Damage will not fall below this if within range.

Inner Radius: Float (single-precision). Inner Radius:. Within InnerRadius, do max damage.

Outer Radius: Float (single-precision). Outer Radius:. Outside OuterRadius, do no damage.

Damage Falloff: Float (single-precision). Damage Falloff:. Describes amount of exponential damage falloff.  

## Outputs

Radial Damage Params: Radial Damage Params Structure.

