# SetSoundClassDistanceScale

Linearly interpolates the attenuation distance scale value from it's current attenuation distance override value. (1.0f it not overridden) to its new attenuation distance override, over the given amount of time

  * Fire and Forget.

  * Not Replicated.





Target is Gameplay Statics

## 图示

![]($-20221218-18075065.png)

## Inputs

In: Exec.

Sound Class: Sound Class Object Reference. Sound class to to use to set the attenuation distance scale on..

Distance Attenuation Scale: Float (single-precision). A scalar for the attenuation distance used for computing distance attenuation..

Time Sec: Float (single-precision). A time value to linearly interpolate from the current distance attenuation scale value to the new value..  

## Outputs

Out: Exec.

