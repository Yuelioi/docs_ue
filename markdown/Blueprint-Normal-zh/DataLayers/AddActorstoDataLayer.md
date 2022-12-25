# AddActorstoDataLayer

Adding actors to the data layer

The target is the data layer editing subsystem

## 图示

![]($-20221218-18343933.png)

## Inputs

In. exec.

Target. Data layer editing subsystem object reference.

Actor. The array of actor object references. Actors to be added to the data layer.

DataLayer. Data layer object reference. The data layer to add to. 

## Outputs

Output. Execute: Execute.

Return Value. Boolean value. True if at least one actor has been added to the DataLayer. false is returned if all the actors already belong to the DataLayer.