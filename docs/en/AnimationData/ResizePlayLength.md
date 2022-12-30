# ResizePlayLength

Sets the total play-able length in seconds. Broadcasts a EAnimDataModelNotifyType::SequenceLengthChanged notify if successful.. T0 and T1 are expected to represent the window of time that was either added or removed. E.g. for insertion T0 indicates the time. at which additional time starts and T1 were it ends. For removal T0 indicates the time at which time should be started to remove, and T1 indicates the end. Giving a total of T1 - T0 added or removed length.. The number of frames and keys for the provided length is recalculated according to the current value of UAnimDataModel::FrameRate.

Target is Animation Data Controller

## 图示

![]($-20221218-17533201.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

New Length: Float (single-precision).

T0: Float (single-precision). Point between 0 and Length at which the change in time starts.

T1: Float (single-precision). Point between 0 and Length at which the change in time ends.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

