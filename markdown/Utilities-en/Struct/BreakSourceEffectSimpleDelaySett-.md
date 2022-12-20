# BreakSourceEffectSimpleDelaySett-

Adds a node that breaks a 'SourceEffectSimpleDelaySettings' into its member fields

## 图示

![]($-20221218-14433631.png)

## Inputs

Source Effect Simple Delay Settings: Source Effect Simple Delay Settings Structure (by ref).  

## Outputs

Speed Of Sound: Float (single-precision). Speed Of Sound:. Speed of sound in meters per second when using distance-based delay.

Delay Amount: Float (single-precision). Delay Amount:. Delay amount in seconds.

Dry Amount: Float (single-precision). Dry Amount:. Gain stage on dry (non-delayed signal).

Wet Amount: Float (single-precision). Wet Amount:. Gain stage on wet (delayed) signal.

Feedback: Float (single-precision). Feedback:. Amount to feedback into the delay line (because why not).

Delay Based On Distance: Boolean. Delay Based on Distance:. Whether or not to delay the audio based on the distance to the listener or use manual delay.

