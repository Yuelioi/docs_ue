# BreakTimecode

Adds a node that breaks a 'Timecode' into its member fields

## 图示

![]($-20221218-14443389.png)

## Inputs

Timecode: Timecode Structure (by ref).  

## Outputs

Hours: Integer. Hours.

Minutes: Integer. Minutes.

Seconds: Integer. Seconds.

Frames: Integer. Frames.

Drop Frame Format: Boolean. Drop Frame Format:. If true, this Timecode represents a Drop Frame timecode used to account for fractional frame rates in NTSC play rates..

