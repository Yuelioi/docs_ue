# FadeIn

This function allows designers to call Play on an Audio Component instance while applying a volume curve over time.. Parameters allow designers to indicate the duration of the fade, the curve shape, and the start time if seeking into the sound.

Target is Audio Component

## 图示

![]($-20221218-18025067.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.

Fade in Duration: Float (single-precision). How long it should take to reach the FadeVolumeLevel.

Fade Volume Level: Float (single-precision). The percentage of the AudioComponents's calculated volume to fade to.

Start Time: Float (single-precision).

Fade Curve: EAudioFaderCurve Enum. The curve to use when interpolating between the old and new volume.  

## Outputs

Out: Exec.

