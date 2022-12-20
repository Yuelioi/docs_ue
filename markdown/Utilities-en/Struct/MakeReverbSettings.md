# MakeReverbSettings

Adds a node that create a 'ReverbSettings' from its members

## 图示

![]($-20221218-15000425.png)

## Inputs

Apply Reverb: Boolean. Apply Reverb:. Whether to apply the reverb settings below..

Reverb Effect: Reverb Effect Object Reference. Reverb Effect:. The reverb asset to employ..

Reverb Plugin Effect: Sound Effect Submix Preset Object Reference. Reverb Plugin Effect:. This is used to apply plugin-specific settings when a Reverb Plugin is being used..

Volume: Float (single-precision). Volume:. Volume level of the reverb affect..

Fade Time: Float (single-precision). Fade Time:. Time to fade from the current reverb settings into this setting, in seconds..  

## Outputs

Reverb Settings: Reverb Settings Structure.

