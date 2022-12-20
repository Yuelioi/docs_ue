# SetMaxAudioChannelsScaled

Sets the max number of voices (also known as "channels") dynamically by percentage. E.g. if you want to temporarily. reduce voice count by 50%, use 0.50. Later, you can return to the original max voice count by using 1.0.

Target is Gameplay Statics

## 图示

![]($-20221218-18074810.png)

## Inputs

In: Exec.

Max Channel Count Scale: Float (single-precision). The percentage of the original voice count to set the max number of voices to.  

## Outputs

Out: Exec.

