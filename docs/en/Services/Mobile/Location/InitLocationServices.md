# InitLocationServices

Called to set up the Location Service before use

Target is Location Services

## 图示

![]($-20221218-20563179.png)

## Inputs

In: Exec.

Accuracy: ELocationAccuracy Enum. as seen in the enum above.

Update Frequency: Float (single-precision). in milliseconds. (Android only).

Min Distance Filter: Float (single-precision).  

## Outputs

Out: Exec.

Return Value: Boolean. true if Initialization was succesful.

