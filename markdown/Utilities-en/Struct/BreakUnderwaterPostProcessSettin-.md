# BreakUnderwaterPostProcessSettin-

Adds a node that breaks a 'UnderwaterPostProcessSettings' into its member fields

## 图示

![]($-20221218-14450200.png)

## Inputs

Underwater Post Process Settings: Underwater Post Process Settings Structure (by ref).  

## Outputs

Enabled: Boolean. Enabled.

Priority: Float (single-precision). Priority.

Blend Radius: Float (single-precision). Blend Radius:. World space radius around the volume that is used for blending (only if not unbound)..

Blend Weight: Float (single-precision). Blend Weight:. 0:no effect, 1:full effect.

Post Process Settings: Post Process Settings Structure. Post Process Settings:. List of all post-process settings to use when underwater : note : use UnderwaterPostProcessMaterial for setting the actual post process material..

