# RemoveBoneTrack_Message

Removes an existing bone animation track with the provided name. Broadcasts a EAnimDataModelNotifyType::TrackRemoved notify if successful.

Target is Animation Data Controller

## 图示

![]($-20221218-17532962.png)

## Inputs

In: Exec.

Target: Object Reference.

Bone Name: Name. Bone name of the track which should be removed.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the removal was successful.

