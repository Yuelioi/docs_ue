# SetVideoTrackFrameRate

Set the frame rate of the specified video track.

Target is Media Player

## 图示

![]($-20221218-20015028.png)

## Inputs

In: Exec.

Target: Media Player Object Reference.

Track Index: Integer. The index of the track, or INDEX_NONE for the selected one..

Format Index: Integer. Index of the track format, or INDEX_NONE for the selected one..

Frame Rate: Float (single-precision). The frame rate to set (must be in range of format's supported frame rates)..  

## Outputs

Out: Exec.

Return Value: Boolean. true on success, false otherwise..

