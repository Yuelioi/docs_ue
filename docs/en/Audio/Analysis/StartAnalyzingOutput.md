# StartAnalyzingOutput

Start spectrum analysis of the audio output. By leaving the Submix To Analyze blank, you can analyze the master output of the game.

Target is Audio Mixer Blueprint Library

## 图示

![]($-20221218-18022698.png)

## Inputs

In: Exec.

Submix to Analyze: Sound Submix Object Reference.

FFTSize: EFFTSize Enum.

Interpolation Method: EFFTPeakInterpolationMethod Enum.

Window Type: EFFTWindowType Enum.

Hop Size: Float (single-precision).

Spectrum Type: EAudioSpectrumType Enum.  

## Outputs

Out: Exec.

