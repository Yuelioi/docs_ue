# BreakSubmixEffectConvolutionReve-

Adds a node that breaks a 'SubmixEffectConvolutionReverbSettings' into its member fields

## 图示

![]($-20221218-14435746.png)

## Inputs

Submix Effect Convolution Reverb Settings: Submix Effect Convolution Reverb Settings Structure (by ref).  

## Outputs

Bypass: Boolean. Bypass:. If true, input audio is directly routed to output audio with applying any effect..

Mix Input Channel Format To Impulse Response Format: Boolean. Mix Input Channel Format to Impulse Response Format:. If true, the submix input audio is downmixed to match the IR asset audio channel: If false, the input audio's channels are matched to the IR assets: audio channels..

Mix Reverb Output To Output Channel Format: Boolean. Mix Reverb Output to Output Channel Format:. If true, the reverberated audio is upmixed or downmixed to match the submix: output audio format. If false, the reverberated audio's channels are matched: to the submixs output audio channels..

Surround Rear Channel Bleed Db: Float (single-precision). Surround Rear Channel Bleed Db:. Amout of audio to be sent to rear channels in quad/surround configurations.

Invert Rear Channel Bleed Phase: Boolean. Invert Rear Channel Bleed Phase:. If true, rear channel bleed sends will have their phase inverted..

Surround Rear Channel Flip: Boolean. Surround Rear Channel Flip:. If true, send Surround Rear Channel Bleed Amount sends front left to back right and vice versa.

