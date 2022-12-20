# BreakSubmixEffectReverbSettings

Adds a node that breaks a 'SubmixEffectReverbSettings' into its member fields

## 图示

![]($-20221218-14440575.png)

## Inputs

Submix Effect Reverb Settings: Submix Effect Reverb Settings Structure (by ref).  

## Outputs

Bypass Early Reflections: Boolean. Bypass Early Reflections:. Bypasses early reflections.

Reflections Delay: Float (single-precision). Reflections Delay:. Reflections Delay - 0.0 < 0.007 < 0.3 Seconds - the time between the listener receiving the direct path sound and the first reflection.

Gain HF: Float (single-precision). Gain HF:. Reverb Gain High Frequency - 0.0 < 0.89 < 1.0 - attenuates the high frequency reflected sound.

Reflections Gain: Float (single-precision). Reflections Gain:. Reflections Gain - 0.0 < 0.05 < 3.16 - controls the amount of initial reflections.

Bypass Late Reflections: Boolean. Bypass Late Reflections:. Bypasses late reflections..

Late Delay: Float (single-precision). Late Delay:. Late Reverb Delay - 0.0 < 0.011 < 0.1 Seconds - time difference between late reverb and first reflections.

Decay Time: Float (single-precision). Decay Time:. Decay Time - 0.1 < 1.49 < 20.0 Seconds - larger is more reverb.

Density: Float (single-precision). Density:. Density - 0.0 < 0.85 < 1.0 - Coloration of the late reverb - lower value is more grainy.

Diffusion: Float (single-precision). Diffusion:. Diffusion - 0.0 < 0.85 < 1.0 - Echo density in the reverberation decay - lower is more grainy.

Air Absorption Gain HF: Float (single-precision). Air Absorption Gain HF:. Air Absorption - 0.0 < 0.994 < 1.0 - lower value means more absorption.

Decay HFRatio: Float (single-precision). Decay HFRatio:. Decay High Frequency Ratio - 0.1 < 0.83 < 2.0 - how much the quicker or slower the high frequencies decay relative to the lower frequencies..

Late Gain: Float (single-precision). Late Gain:. Late Reverb Gain - 0.0 < 1.26 < 10.0 - gain of the late reverb.

Gain: Float (single-precision). Gain:. Reverb Gain - 0.0 < 0.32 < 1.0 - overall reverb gain - master volume control.

Wet Level: Float (single-precision). Wet Level:. Overall wet level of the reverb effect.

Dry Level: Float (single-precision). Dry Level:. Overall dry level of the reverb effect.

Bypass: Boolean. Bypass:. Bypasses reverb.

