# IsExceedingMaxSpeed

Returns true if the current velocity is exceeding the given max speed (usually the result of GetMaxSpeed()), within a small error tolerance.. Note that under normal circumstances updates cause by acceleration will not cause this to be true, however external forces or changes in the max speed limit. can cause the max speed to be violated.

Target is Movement Component

## 图示

![]($-20221218-18245952.png)

## Inputs

Target: Movement Component Object Reference.

Max Speed: Float (single-precision).  

## Outputs

Return Value: Boolean. Returns true if the current velocity is exceeding the given max speed (usually the result of GetMaxSpeed()), within a small error tolerance.. Note that under normal circumstances updates cause by acceleration will not cause this to be true, however external forces or changes in the max speed limit. can cause the max speed to be violated..

