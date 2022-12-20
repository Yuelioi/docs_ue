# BreakSequenceLengthChangedPayloa-

Adds a node that breaks a 'SequenceLengthChangedPayload' into its member fields

## 图示

![]($-20221218-14422648.png)

## Inputs

Sequence Length Changed Payload: Sequence Length Changed Payload Structure (by ref).  

## Outputs

Previous Length: Float (single-precision). Previous Length:. Previous playable length for the Model.

T0: Float (single-precision). T0:. Time at which the change in length has been made.

T1: Float (single-precision). T1:. Length of time which is inserted or removed starting at T0.

