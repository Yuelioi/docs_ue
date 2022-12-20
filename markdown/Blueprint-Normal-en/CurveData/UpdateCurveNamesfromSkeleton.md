# UpdateCurveNamesfromSkeleton

Updates the display name values for any stored curve, with the names being retrieved from the provided skeleton. Broadcasts a EAnimDataModelNotifyType::CurveRenamed for each to-be-updated curve name, wrapped within BracketOpened/BracketClosed notifies.

Target is Animation Data Controller

## 图示

![]($-20221218-18340170.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Skeleton: Skeleton Object Reference. Skeleton to retrieve the display name values from.

Supported Curve Type: ERawCurveTrackTypes Enum. Curve type for which the names should be updated.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

