# AddActortoDataLayers

Add the provided roles to the data layer.

The target is the data layer editing subsystem

## 图示

![]($-20221218-18344273.png)

## Inputs

In. Execution.

Target. Data layer editing subsystem object reference.

Actor. actor object reference. Actors to be added to the provided Data Layers.

Data Layers. An array of Data Layer object references. A list of valid DataLayers. 

## Outputs

Output. Execution.

Return value. Boolean value. True if the actor is added to at least one of the provided data layers.