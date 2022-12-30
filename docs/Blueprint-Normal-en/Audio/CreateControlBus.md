# CreateControlBus

Creates a modulation bus with the provided default value.

Target is Audio Modulation Statics

## 图示

![]($-20221218-18032459.png)

## Inputs

In: Exec.

Name: Name. Name of bus.

Parameter: Sound Modulation Parameter Object Reference. Default value for created bus.

Activate: Boolean. Whether or not to activate bus on creation. If true, deactivation will only occur if returned bus is manually deactivated and not referenced or destroyed (i.e. will not deactivate when all references become inactive)..  

## Outputs

Out: Exec.

Return Value: Sound Control Bus Object Reference.

