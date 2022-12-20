# RenameCurve

Renames the curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveRenamed notify if successful.

Target is Animation Data Controller

## 图示

![]($-20221218-18334051.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Curve to Rename Id: Animation Curve Identifier Structure (by ref). Identifier for the curve to be renamed.

New Curve Id: Animation Curve Identifier Structure (by ref). Time of the key to be removed.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the curve was successfully renamed.

