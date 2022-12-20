# BreakDropTimecode

Adds a node that breaks a 'DropTimecode' into its member fields

## 图示

![]($-20221218-14353624.png)

## Inputs

Drop Timecode: Drop Timecode Structure (by ref).  

## Outputs

Timecode: Timecode Structure. Timecode:. Decoded Timecode.

Frame Rate: Integer. Frame Rate:. Guess at incoming frame rate.

Color Framing: Boolean. Color Framing:. Sync is in phase with color burst.

Running Forward: Boolean. Running Forward:. When timecode is reading forward.

New Frame: Boolean. New Frame:. Is a new timecode frame.

