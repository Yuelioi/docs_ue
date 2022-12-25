# AddActortoDataLayer

Add roles to the data layer.

The target is the data layer editing subsystem

## 图示

![]($-20221218-18344164.png)

## Inputs

In. Execution.

Target. Data layer editing subsystem object reference.

Actor. actor object reference. Actors to add to the data layer.

DataLayer. DataLayer object reference. The DataLayer to which the actor is to be added. 

## Outputs

Output. Execute: The execution.

Return Value. Boolean value. True if the actor is added. Returns false if the actor already belongs to the data layer.