# FadeOut

This function allows designers to call a delayed Stop on an Audio Component instance while applying a. volume curve over time. Parameters allow designers to indicate the duration of the fade and the curve shape.

Target is Audio Component

## 图示

![]($-20221218-18025176.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.

Fade Out Duration: Float (single-precision). how long it should take to reach the FadeVolumeLevel.

Fade Volume Level: Float (single-precision). the percentage of the AudioComponents's calculated volume in which to fade to.

Fade Curve: EAudioFaderCurve Enum. The curve to use when interpolating between the old and new volume.  

## Outputs

Out: Exec.

