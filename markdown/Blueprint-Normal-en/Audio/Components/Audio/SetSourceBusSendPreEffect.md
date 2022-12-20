# SetSourceBusSendPreEffect

Allows designers to target a specific Audio Component instance?s sound and set the send level (volume of sound copied). to the indicated Source Bus. If the Source Bus is not already part of the sound?s sends, the reference will be added to. this instance?s Override sends. This particular send occurs before the Source Effect processing chain.

Target is Audio Component

## 图示

![]($-20221218-18031670.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.

Sound Source Bus: Sound Source Bus Object Reference. The Bus to send the signal to..

Source Bus Send Level: Float (single-precision). The scalar used to alter the volume of the copied signal..  

## Outputs

Out: Exec.

