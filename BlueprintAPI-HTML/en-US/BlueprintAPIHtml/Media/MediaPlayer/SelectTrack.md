# SelectTrack

Select the active track of the given type.

The selected track will use its currently active format. Active formats will. be remembered on a per track basis. The first available format is active by

  1. To switch the track format, use SetTrackFormat instead.





Target is Media Player

## 图示

![]($-20221218-20013981.png)

## Inputs

In: Exec.

Target: Media Player Object Reference.

Track Type: EMediaPlayerTrack Enum. The type of track to select..

Track Index: Integer. The index of the track to select, or INDEX_NONE to deselect..  

## Outputs

Out: Exec.

Return Value: Boolean. true if the track was selected, false otherwise..

