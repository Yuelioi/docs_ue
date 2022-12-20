# MakeInteriorSettings

Adds a node that create a 'InteriorSettings' from its members

## 图示

![]($-20221218-14560256.png)

## Inputs

Exterior Volume: Float (single-precision). Exterior Volume:. The desired volume of sounds outside the volume when the player is inside the volume.

Exterior Time: Float (single-precision). Exterior Time:. The time over which to interpolate from the current volume to the desired volume of sounds outside the volume when the player enters the volume.

Exterior LPF: Float (single-precision). Exterior LPF:. The desired LPF frequency cutoff in hertz of sounds outside the volume when the player is inside the volume.

Exterior LPFTime: Float (single-precision). Exterior LPFTime:. The time over which to interpolate from the current LPF to the desired LPF of sounds outside the volume when the player enters the volume.

Interior Volume: Float (single-precision). Interior Volume:. The desired volume of sounds inside the volume when the player is outside the volume.

Interior Time: Float (single-precision). Interior Time:. The time over which to interpolate from the current volume to the desired volume of sounds inside the volume when the player exits the volume.

Interior LPF: Float (single-precision). Interior LPF:. The desired LPF frequency cutoff in hertz of sounds inside the volume when the player is outside the volume.

Interior LPFTime: Float (single-precision). Interior LPFTime:. The time over which to interpolate from the current LPF to the desired LPF of sounds inside the volume when the player exits the volume.  

## Outputs

Interior Settings: Interior Settings Structure.

