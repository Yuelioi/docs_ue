# InsertBoneTrack_Message

Inserts a new bone animation track for the provided name, at the provided index. Broadcasts a EAnimDataModelNotifyType::TrackAdded notify if successful.. The bone name is verified with the AnimModel's outer target USkeleton to ensure the bone exists.

Target is Animation Data Controller

## 图示

![]($-20221218-17532293.png)

## Inputs

In: Exec.

Target: Object Reference.

Bone Name: Name. Bone name for which a track should be inserted.

Desired Index: Integer. Index at which the track should be inserted.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Integer. The index at which the bone track was inserted, INDEX_NONE if the insertion failed.

