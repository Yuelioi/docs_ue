# SetBoneTrackKeys_Message

Removes an existing bone animation track with the provided name. Broadcasts a EAnimDataModelNotifyType::TrackChanged notify if successful.. The provided number of keys provided is expected to match for each component, and be non-zero.

Target is Animation Data Controller

## 图示

![]($-20221218-17533655.png)

## Inputs

In: Exec.

Target: Object Reference.

Bone Name: Name. Bone name of the track for which the keys should be set.

Positional Keys: Array of Vectors. Array of keys for the translation component.

Rotational Keys: Array of Quat Structures. Array of keys for the rotation component.

Scaling Keys: Array of Vectors. Array of keys for the scale component.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the keys were successfully set.

