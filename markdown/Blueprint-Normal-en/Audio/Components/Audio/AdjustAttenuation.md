# AdjustAttenuation

This function is used to modify the Attenuation Settings on the targeted Audio Component instance. It is worth noting that Attenuation Settings are only passed to new Active Sounds on start, so modified Attenuation data should be set before sound playback.

Target is Audio Component

## 图示

![]($-20221218-18024832.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.

In Attenuation Settings: Sound Attenuation Settings Structure (by ref).  

## Outputs

Out: Exec.

