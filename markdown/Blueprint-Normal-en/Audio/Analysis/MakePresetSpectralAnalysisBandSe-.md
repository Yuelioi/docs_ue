# MakePresetSpectralAnalysisBandSe-

Make an array of bands which span the frequency range of a given EAudioSpectrumBandPresetType.

Target is Audio Mixer Blueprint Library

## 图示

![]($-20221218-18022587.png)

## Inputs

In Band Preset Type: EAudioSpectrumBandPresetType Enum. The type audio content which the bands encompass..

In Num Bands: Integer. The number of bands used to represent the spectrum..

In Attack Time Msec: Integer. The attack time (in milliseconds) to apply to each band's envelope tracker..

In Release Time Msec: Integer. The release time (in milliseconds) to apply to each band's envelope tracker..  

## Outputs

Return Value: Array of Sound Submix Spectral Analysis Band Settings Structures.

