# SetFadeOut

Sets the decal's fade start time, duration and if the owning actor should be destroyed after the decal is fully faded out.. The default value of 0 for FadeStartDelay and FadeDuration makes the decal persistent. See DecalLifetimeOpacity material. node to control the look of "fading out."

Target is Decal Component

## 图示

![]($-20221218-20334116.png)

## Inputs

In: Exec.

Target: Decal Component Object Reference.

Start Delay: Float (single-precision). Time in seconds to wait before beginning to fade out the decal..

Duration: Float (single-precision). Time in second for the decal to fade out..

Destroy Owner After Fade: Boolean. Should the owning actor automatically be destroyed after it is completely faded out..  

## Outputs

Out: Exec.

