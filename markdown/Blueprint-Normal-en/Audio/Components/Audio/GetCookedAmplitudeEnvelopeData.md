# GetCookedAmplitudeEnvelopeData

Retrieves Cooked Amplitude Envelope Data at the current playback time. If there are multiple. SoundWaves playing, data is interpolated and averaged across all playing sound waves.. Returns FALSE if no data was found.

Target is Audio Component

## 图示

![]($-20221218-18025520.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.  

## Outputs

Out: Exec.

Out Envelope Data: Float (single-precision).

Return Value: Boolean. Retrieves Cooked Amplitude Envelope Data at the current playback time. If there are multiple. SoundWaves playing, data is interpolated and averaged across all playing sound waves.. Returns FALSE if no data was found..

