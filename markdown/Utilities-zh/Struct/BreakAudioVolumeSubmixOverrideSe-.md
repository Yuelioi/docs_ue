# BreakAudioVolumeSubmixOverrideSe-

Adds a node that breaks a 'AudioVolumeSubmixOverrideSettings' into its member fields

## 图示

![]($-20221218-14313613.png)

## Inputs

Audio Volume Submix Override Settings: Audio Volume Submix Override Settings Structure (by ref).  

## Outputs

Submix: Sound Submix Object Reference. Submix:. The submix to override the effect chain of.

Submix Effect Chain: Array of Sound Effect Submix Preset Object References. Submix Effect Chain:. The submix effect chain to override.

Crossfade Time: Float (single-precision). Crossfade Time:. The amount of time to crossfade to the override for the submix chain.

