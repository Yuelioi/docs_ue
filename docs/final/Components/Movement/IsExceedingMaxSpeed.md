# IsExceedingMaxSpeed

如果当前速度超过了给定的最大速度（通常是GetMaxSpeed()的结果），在一个很小的误差范围内，返回真。请注意，在正常情况下，由加速度引起的更新不会导致这个结果为真，但是外力或最大速度限制的变化会导致最大速度被违反。

目标是运动组件

## 图示

![]($-20221218-18245952.png)

## Inputs

目标。运动组件对象参考。

最大速度。浮点数（单精度）。 

## Outputs

返回值。布尔值。如果当前速度超过了给定的最大速度（通常是GetMaxSpeed()的结果），在一个很小的误差范围内，返回真。请注意，在正常情况下，由加速度引起的更新不会导致该值为真，但是外力或最大速度限制的变化会导致最大速度被违反。

Returns true if the current velocity is exceeding the given max speed (usually the result of GetMaxSpeed()), within a small error tolerance.. Note that under normal circumstances updates cause by acceleration will not cause this to be true, however external forces or changes in the max speed limit. can cause the max speed to be violated.

Target is Movement Component

## 图示

![]($-20221218-18245952.png)

## Inputs

Target: Movement Component Object Reference.

Max Speed: Float (single-precision).  

## Outputs

Return Value: Boolean. Returns true if the current velocity is exceeding the given max speed (usually the result of GetMaxSpeed()), within a small error tolerance.. Note that under normal circumstances updates cause by acceleration will not cause this to be true, however external forces or changes in the max speed limit. can cause the max speed to be violated..

