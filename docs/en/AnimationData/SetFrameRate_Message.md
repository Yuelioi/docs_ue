# SetFrameRate_Message

Sets the frame rate according to which the bone animation is expected to be sampled. Broadcasts a EAnimDataModelNotifyType::FrameRateChanged notify if successful.. The number of frames and keys for the provided frame rate is recalculated according to the current value of UAnimDataModel::PlayLength.

Target is Animation Data Controller

## 图示

![]($-20221218-17533879.png)

## Inputs

In: Exec.

Target: Object Reference.

Frame Rate: Frame Rate Structure. The new sampling frame rate, has to be positive and non-zero.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

