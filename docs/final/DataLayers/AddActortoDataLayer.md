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
Adds the actor to the DataLayer.

Target is Data Layer Editor Subsystem

## 图示

![]($-20221218-18344164.png)

## Inputs

In: Exec.

Target: Data Layer Editor Subsystem Object Reference.

Actor: Actor Object Reference. The actor to add to the DataLayer.

Data Layer: Data Layer Object Reference. The DataLayer to add the actor to.  

## Outputs

Out: Exec.

Return Value: Boolean. true if the actor was added. false is returned if the actor already belongs to the DataLayer..

