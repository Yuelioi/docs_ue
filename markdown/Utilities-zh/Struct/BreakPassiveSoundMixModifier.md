# BreakPassiveSoundMixModifier

Adds a node that breaks a 'PassiveSoundMixModifier' into its member fields

## 图示

![]($-20221218-14410353.png)

## Inputs

Passive Sound Mix Modifier: Passive Sound Mix Modifier Structure (by ref).  

## Outputs

Sound Mix: Sound Mix Object Reference. Sound Mix:. The SoundMix to activate.

Min Volume Threshold: Float (single-precision). Min Volume Threshold:. Minimum volume level required to activate SoundMix. Below this value the SoundMix will not be active..

Max Volume Threshold: Float (single-precision). Max Volume Threshold:. Maximum volume level required to activate SoundMix. Above this value the SoundMix will not be active..

