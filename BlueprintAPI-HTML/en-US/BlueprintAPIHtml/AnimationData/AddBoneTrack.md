# AddBoneTrack

Adds a new bone animation track for the provided name. Broadcasts a EAnimDataModelNotifyType::TrackAdded notify if successful.

Target is Animation Data Controller

## 图示

![]($-20221218-17531492.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Bone Name: Name. Bone name for which a track should be added.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Integer. The index at which the bone track was added, INDEX_NONE if adding it failed.

