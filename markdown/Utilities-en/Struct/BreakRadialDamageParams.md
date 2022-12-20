# BreakRadialDamageParams

Adds a node that breaks a 'RadialDamageParams' into its member fields

## 图示

![]($-20221218-14413725.png)

## Inputs

Radial Damage Params: Radial Damage Params Structure (by ref).  

## Outputs

Base Damage: Float (single-precision). Base Damage:. Max damage done.

Minimum Damage: Float (single-precision). Minimum Damage:. Damage will not fall below this if within range.

Inner Radius: Float (single-precision). Inner Radius:. Within InnerRadius, do max damage.

Outer Radius: Float (single-precision). Outer Radius:. Outside OuterRadius, do no damage.

Damage Falloff: Float (single-precision). Damage Falloff:. Describes amount of exponential damage falloff.

