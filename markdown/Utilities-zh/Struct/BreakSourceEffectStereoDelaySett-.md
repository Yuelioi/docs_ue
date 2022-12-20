# BreakSourceEffectStereoDelaySett-

Adds a node that breaks a 'SourceEffectStereoDelaySettings' into its member fields

## 图示

![]($-20221218-14433718.png)

## Inputs

Source Effect Stereo Delay Settings: Source Effect Stereo Delay Settings Structure (by ref).  

## Outputs

Delay Mode: EStereoDelaySourceEffect Enum. Delay Mode:. What mode to set the stereo delay effect..

Delay Time Msec: Float (single-precision). Delay Time Msec:. The base amount of delay in the left and right channels of the delay line..

Feedback: Float (single-precision). Feedback:. The amount of audio to feedback into the delay line once the delay has been tapped..

Delay Ratio: Float (single-precision). Delay Ratio:. Delay spread for left and right channels. Allows left and right channels to have differential delay amounts. Useful for stereo channel decorrelation..

Wet Level: Float (single-precision). Wet Level:. The amount of delay effect to mix with the dry input signal into the effect..

Dry Level: Float (single-precision). Dry Level:. The dry level of the effect.

Filter Enabled: Boolean. Filter Enabled:. Whether or not to enable filtering.

Filter Type: EStereoDelayFiltertype Enum. Filter Type:. Filter type to feed feedback audio to.

Filter Frequency: Float (single-precision). Filter Frequency:. Cutoff frequency of the filter.

Filter Q: Float (single-precision). Filter Q:. Q of the filter.

