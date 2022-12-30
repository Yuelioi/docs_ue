# SetDropTimecodeFrameNumber

Convert frame number into a drop timecode

Target is Linear Timecode Component

## 图示

![]($-20221218-20024912.png)

## Inputs

In: Exec.

Timecode: Drop Timecode Structure (by ref). used to access the framerate, and drop flag.

Frame Number: Integer. Frame number to set in the returned timecode.  

## Outputs

Out: Exec.

Out Timecode: Drop Timecode Structure. Returned drop timecode.

