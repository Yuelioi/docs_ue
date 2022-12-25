# AddActorstoDataLayers

Adding actors to the data layer

The target is the data layer editing subsystem

## 图示

![]($-20221218-18344045.png)

## Inputs

In. exec.

Target. Data layer editing subsystem object reference.

Actor. The array of actor object references. Actors to be added to the data layer.

Data Layers: Array of Data Layer object references. A list of valid DataLayers. 

## Outputs

Output. Execute: The execution.

Return Value. Boolean. True if at least one actor has been added to at least one data layer. Returns false if all actors already belong to all specified data layers.