# SetDataLayersIsLoadedinEditor

Changes the IsLoadedInEditor flag of the DataLayers to the provided state

Target is Data Layer Editor Subsystem

## 图示

![]($-20221218-18352144.png)

## Inputs

In: Exec.

Target: Data Layer Editor Subsystem Object Reference.

Data Layers: Array of Data Layer Object References. The DataLayers to affect.

Is Loaded in Editor: Boolean. The new value of the flag IsLoadedInEditor. If True, the Editor loading will consider this DataLayer to load or not an Actor part of this DataLayer. An Actor will not be loaded in the Editor if all its DataLayers are not LoadedInEditor..

Is from User Change: Boolean. If this change originates from a user change or not..  

## Outputs

Out: Exec.

Return Value: Boolean.

