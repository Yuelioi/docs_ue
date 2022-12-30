# SetVolumeonChannel

Sets the volume for strings vocalized on a text to speech channel.. If the provided channel Id does not exist, nothing will happen.

Target is Text to Speech Engine Subsystem

## 图示

![]($-20221218-21114533.png)

## Inputs

In: Exec.

Target: Text To Speech Engine Subsystem Object Reference.

Channel Id: Name. The Id for the channel to set for..

Volume: Float (single-precision). The volume to be set on the channel. The value will be clamped between 0.0f and 1.0f..  

## Outputs

Out: Exec.

