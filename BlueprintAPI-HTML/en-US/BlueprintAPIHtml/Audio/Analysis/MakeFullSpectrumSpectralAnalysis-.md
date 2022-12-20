# MakeFullSpectrumSpectralAnalysis-

Make an array of logarithmically spaced bands.

Target is Audio Mixer Blueprint Library

## 图示

![]($-20221218-18022365.png)

## Inputs

In Num Bands: Integer. The number of bands to used to represent the spectrum..

In Minimum Frequency: Float (single-precision). The center frequency of the first band..

In Maximum Frequency: Float (single-precision). The center frequency of the last band..

In Attack Time Msec: Integer. The attack time (in milliseconds) to apply to each band's envelope tracker..

In Release Time Msec: Integer. The release time (in milliseconds) to apply to each band's envelope tracker..  

## Outputs

Return Value: Array of Sound Submix Spectral Analysis Band Settings Structures.

