# BreakSoundSubmixSpectralAnalysis-

Adds a node that breaks a 'SoundSubmixSpectralAnalysisBandSettings' into its member fields

## 图示

![]($-20221218-14431393.png)

## Inputs

Sound Submix Spectral Analysis Band Settings: Sound Submix Spectral Analysis Band Settings Structure (by ref).  

## Outputs

Band Frequency: Float (single-precision). Band Frequency:. The frequency band for the magnitude to analyze.

Attack Time Msec: Integer. Attack Time Msec:. The attack time for the FFT band interpolation for delegate callback.

Release Time Msec: Integer. Release Time Msec:. The release time for the FFT band interpolation for delegate callback.

QFactor: Float (single-precision). QFactor:. The ratio of the bandwidth divided by the center frequency. Only used when the spectral analysis type is set to Constant Q..

