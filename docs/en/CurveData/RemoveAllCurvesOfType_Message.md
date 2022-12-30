# RemoveAllCurvesOfType_Message

Removes all the curves of the provided type. Broadcasts a EAnimDataModelNotifyType::CurveRemoved for each removed curve, wrapped within BracketOpened/BracketClosed notifies.

Target is Animation Data Controller

## 图示

![]($-20221218-18333236.png)

## Inputs

In: Exec.

Target: Object Reference.

Supported Curve Type: ERawCurveTrackTypes Enum. Type for which all curves are to be removed.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

