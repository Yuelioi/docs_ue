# GetBeamSourceTangent

Get the beam source tangent

Target is Particle System Component

## 图示

![]($-20221218-18543364.png)

## Inputs

Target: Particle System Component Object Reference.

Emitter Index: Integer. The index of the emitter to get.

Source Index: Integer. Which beam within the emitter to get.  

## Outputs

Out Tangent Point: Vector. Value of source tangent.

Return Value: Boolean. true EmitterIndex and SourceIndex are valid - OutTangentPoint is valid false EmitterIndex or SourceIndex is invalid - OutTangentPoint is invalid.

