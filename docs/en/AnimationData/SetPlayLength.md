# SetPlayLength

Sets the total play-able length in seconds. Broadcasts a EAnimDataModelNotifyType::SequenceLengthChanged notify if successful.. The number of frames and keys for the provided length is recalculated according to the current value of UAnimDataModel::FrameRate.

Target is Animation Data Controller

## 图示

![]($-20221218-17534219.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Length: Float (single-precision). New play-able length value, has to be positive and non-zero.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

