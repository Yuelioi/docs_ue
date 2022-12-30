# GetBeamSourceStrength

Get the beam source strength

Target is Particle System Component

## 图示

![]($-20221218-18543231.png)

## Inputs

Target: Particle System Component Object Reference.

Emitter Index: Integer. The index of the emitter to get.

Source Index: Integer. Which beam within the emitter to get.  

## Outputs

Out Source Strength: Float (single-precision). Value of source tangent.

Return Value: Boolean. true EmitterIndex and SourceIndex are valid - OutSourceStrength is valid false EmitterIndex or SourceIndex is invalid - OutSourceStrength is invalid.

