# MakeUnderwaterPostProcessSetting-

Adds a node that create a 'UnderwaterPostProcessSettings' from its members

## 图示

![]($-20221218-15035373.png)

## Inputs

Enabled: Boolean. Enabled.

Priority: Float (single-precision). Priority.

Blend Radius: Float (single-precision). Blend Radius:. World space radius around the volume that is used for blending (only if not unbound)..

Blend Weight: Float (single-precision). Blend Weight:. 0:no effect, 1:full effect.

Post Process Settings: Post Process Settings Structure. Post Process Settings:. List of all post-process settings to use when underwater : note : use UnderwaterPostProcessMaterial for setting the actual post process material..  

## Outputs

Underwater Post Process Settings: Underwater Post Process Settings Structure.

