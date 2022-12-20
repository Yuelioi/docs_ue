# SetRateonChannel

Sets the current speech rate strings should be vocalized on a text to speech channel.. If the provided channel does not exist, nothing will happen.

Target is Text to Speech Engine Subsystem

## 图示

![]($-20221218-21114413.png)

## Inputs

In: Exec.

Target: Text To Speech Engine Subsystem Object Reference.

Channel Id: Name. The Id for the channel to set the speech rate on..

Rate: Float (single-precision). The speech rate to set for the channel. Value will be clamped between 0.0f and 1.0f..  

## Outputs

Out: Exec.

