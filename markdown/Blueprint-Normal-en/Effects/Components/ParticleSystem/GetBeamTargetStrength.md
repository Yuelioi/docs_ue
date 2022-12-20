# GetBeamTargetStrength

Get the beam target strength

Target is Particle System Component

## 图示

![]($-20221218-18543647.png)

## Inputs

Target: Particle System Component Object Reference.

Emitter Index: Integer. The index of the emitter to get.

Target Index: Integer. Which beam within the emitter to get.  

## Outputs

Out Target Strength: Float (single-precision). Value of target tangent.

Return Value: Boolean. true EmitterIndex and TargetIndex are valid - OutTargetStrength is valid false EmitterIndex or TargetIndex is invalid - OutTargetStrength is invalid.

