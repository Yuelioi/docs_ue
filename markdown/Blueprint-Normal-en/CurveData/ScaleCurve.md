# ScaleCurve

Scales the curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveScaled notify if successful.

Target is Animation Data Controller

## 图示

![]($-20221218-18334284.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier of the curve to scale.

Origin: Float (single-precision). Time to use as the origin when scaling the curve.

Factor: Float (single-precision). Factor with which the curve is supposed to be scaled.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not scaling the curve was successful.

