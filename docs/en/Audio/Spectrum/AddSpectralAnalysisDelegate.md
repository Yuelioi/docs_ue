# AddSpectralAnalysisDelegate

Adds a spectral analysis delegate to receive notifications when this submix has spectrum analysis enabled.

Target is Sound Submix

## 图示

![]($-20221218-18080519.png)

## Inputs

In: Exec.

Target: Sound Submix Object Reference.

In Band Settings: Array of Sound Submix Spectral Analysis Band Settings Structures. The frequency bands to analyze and their envelope-following settings..

On Submix Spectral Analysis BP: Delegate (by ref). Event to fire when new spectral data is available..

Update Rate: Float (single-precision). How often to retrieve the data from the spectral analyzer and broadcast the event. Max is 30 times per second..

Decibel Noise Floor: Float (single-precision). Decibel Noise Floor to consider as silence silence when using a Decibel Spectrum Type..

Do Normalize: Boolean. If true, output band values will be normalized between zero and one..

Do Auto Range: Boolean. If true, output band values will have their ranges automatically adjusted to the minimum and maximum values in the audio. Output band values will be normalized between zero and one..

Auto Range Attack Time: Float (single-precision). The time (in seconds) it takes for the range to expand to 90% of a larger range..

Auto Range Release Time: Float (single-precision). The time (in seconds) it takes for the range to shrink to 90% of a smaller range..  

## Outputs

Out: Exec.

