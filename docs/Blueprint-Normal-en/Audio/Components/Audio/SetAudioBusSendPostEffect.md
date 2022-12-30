# SetAudioBusSendPostEffect

Sets how much audio the sound should send to the given Audio Bus (POST Source Effects).. if the Audio Bus Send doesn't already exist, it will be added to the overrides on the active sound.

Target is Audio Component

## 图示

![]($-20221218-18030640.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.

Audio Bus: Audio Bus Object Reference. The Bus to send the signal to.

Audio Bus Send Level: Float (single-precision). The scalar used to alter the volume of the copied signal.  

## Outputs

Out: Exec.

