# MakeSoundSubmixSpectralAnalysisB-

Adds a node that create a 'SoundSubmixSpectralAnalysisBandSettings' from its members

## 图示

![]($-20221218-15015502.png)

## Inputs

Band Frequency: Float (single-precision). Band Frequency:. The frequency band for the magnitude to analyze.

Attack Time Msec: Integer. Attack Time Msec:. The attack time for the FFT band interpolation for delegate callback.

Release Time Msec: Integer. Release Time Msec:. The release time for the FFT band interpolation for delegate callback.

QFactor: Float (single-precision). QFactor:. The ratio of the bandwidth divided by the center frequency. Only used when the spectral analysis type is set to Constant Q..  

## Outputs

Sound Submix Spectral Analysis Band Settings: Sound Submix Spectral Analysis Band Settings Structure.

