# GetCookedFFTData

Retrieves the current-time cooked spectral data of the sounds playing on the audio component.. Spectral data is averaged and interpolated for all playing sounds on this audio component.. Returns true if there is data and the audio component is playing.

Target is Audio Component

## 图示

![]($-20221218-18025628.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.

Frequencies to Get: Array of Float (single-precision)s.  

## Outputs

Out: Exec.

Out Sound Wave Spectral Data: Array of Sound Wave Spectral Data Structures.

Return Value: Boolean. Retrieves the current-time cooked spectral data of the sounds playing on the audio component.. Spectral data is averaged and interpolated for all playing sounds on this audio component.. Returns true if there is data and the audio component is playing..

