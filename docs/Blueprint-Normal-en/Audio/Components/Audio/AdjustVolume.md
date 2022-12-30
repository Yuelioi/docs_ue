# AdjustVolume

This function allows designers to trigger an adjustment to the sound instance?s playback Volume with options for smoothly applying a curve over time.

Target is Audio Component

## 图示

![]($-20221218-18024936.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.

Adjust Volume Duration: Float (single-precision). The length of time in which to interpolate between the initial volume and the new volume..

Adjust Volume Level: Float (single-precision). The new volume to set the Audio Component to..

Fade Curve: EAudioFaderCurve Enum. The curve used when interpolating between the old and new volume..  

## Outputs

Out: Exec.

