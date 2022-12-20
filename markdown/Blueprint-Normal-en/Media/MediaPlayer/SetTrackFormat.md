# SetTrackFormat

Set the format on the specified track.

Selecting the format will not switch to the specified track. To switch. tracks, use SelectTrack instead. If the track is already selected, the. format change will be applied immediately.

Target is Media Player

## 图示

![]($-20221218-20014909.png)

## Inputs

In: Exec.

Target: Media Player Object Reference.

Track Type: EMediaPlayerTrack Enum. The type of track to update..

Track Index: Integer. The index of the track to update..

Format Index: Integer. The index of the format to select (must be valid)..  

## Outputs

Out: Exec.

Return Value: Boolean. true if the track was selected, false otherwise..

