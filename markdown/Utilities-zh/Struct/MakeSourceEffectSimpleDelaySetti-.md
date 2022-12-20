# MakeSourceEffectSimpleDelaySetti-

Adds a node that create a 'SourceEffectSimpleDelaySettings' from its members

## 图示

![]($-20221218-15021693.png)

## Inputs

Speed Of Sound: Float (single-precision). Speed Of Sound:. Speed of sound in meters per second when using distance-based delay.

Delay Amount: Float (single-precision). Delay Amount:. Delay amount in seconds.

Dry Amount: Float (single-precision). Dry Amount:. Gain stage on dry (non-delayed signal).

Wet Amount: Float (single-precision). Wet Amount:. Gain stage on wet (delayed) signal.

Feedback: Float (single-precision). Feedback:. Amount to feedback into the delay line (because why not).

Delay Based On Distance: Boolean. Delay Based on Distance:. Whether or not to delay the audio based on the distance to the listener or use manual delay.  

## Outputs

Source Effect Simple Delay Settings: Source Effect Simple Delay Settings Structure.

