# FindorAddCurveNamesonSkeleton_Me-

Updates the curve names with the provided skeleton, if a display name is not found it will be added thus modifying the skeleton. Broadcasts a EAnimDataModelNotifyType::CurveRenamed for each curve name for which the UID was different or if it was added as a new smartname, wrapped within BracketOpened/BracketClosed notifies.

Target is Animation Data Controller

## 图示

![]($-20221218-18333008.png)

## Inputs

In: Exec.

Target: Object Reference.

Skeleton: Skeleton Object Reference. Skeleton to retrieve the display name values from.

Supported Curve Type: ERawCurveTrackTypes Enum. Curve type for which the names should be updated.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

