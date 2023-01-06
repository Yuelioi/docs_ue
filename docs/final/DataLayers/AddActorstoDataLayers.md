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
Add the actors to the DataLayers

Target is Data Layer Editor Subsystem

## 图示

![]($-20221218-18344045.png)

## Inputs

In: Exec.

Target: Data Layer Editor Subsystem Object Reference.

Actors: Array of Actor Object References. The actors to add to the DataLayers.

Data Layers: Array of Data Layer Object References. A valid list of DataLayers..  

## Outputs

Out: Exec.

Return Value: Boolean. true if at least one actor was added to at least one DataLayer. false is returned if all the actors already belonged to all specified DataLayers..

