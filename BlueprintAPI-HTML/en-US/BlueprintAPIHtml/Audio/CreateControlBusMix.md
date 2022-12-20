# CreateControlBusMix

Creates a modulation bus mix, with a bus stage set to the provided target value.

Target is Audio Modulation Statics

## 图示

![]($-20221218-18032574.png)

## Inputs

In: Exec.

Name: Name. Name of mix..

Stages: Array of Sound Control Bus Mix Stage Structures. Stages mix is responsible for..

Activate: Boolean. Whether or not to activate mix on creation. If true, deactivation will only occur if returned mix is manually deactivated and not referenced or destroyed (i.e. will not deactivate when all references become inactive)..  

## Outputs

Out: Exec.

Return Value: Sound Control Bus Mix Object Reference.

