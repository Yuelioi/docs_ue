# SetTime_Enum

Sets the time for this key in the owning channel. Will replace any key that already exists at that frame number in this channel.

Target is Movie Scene Scripting Byte Key

## 图示

![]($-20221218-20504573.png)

## Inputs

In: Exec.

Target: Movie Scene Scripting Byte Key Object Reference.

New Frame Number: Frame Number Structure (by ref). What frame should this key be moved to? This should be in the time unit specified by TimeUnit..

Sub Frame: Float (single-precision). If using Display Rate time, what is the sub-frame this should go to? Clamped [0-1), and ignored with when TimeUnit is set to Tick Resolution..

Time Unit: ESequenceTimeUnit Enum. Should the NewFrameNumber be interpreted as Display Rate frames or in Tick Resolution?.  

## Outputs

Out: Exec.

