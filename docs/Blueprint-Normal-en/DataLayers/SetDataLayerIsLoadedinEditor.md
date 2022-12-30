# SetDataLayerIsLoadedinEditor

Changes the DataLayer's IsLoadedInEditor flag to the provided state

Target is Data Layer Editor Subsystem

## 图示

![]($-20221218-18351795.png)

## Inputs

In: Exec.

Target: Data Layer Editor Subsystem Object Reference.

Data Layer: Data Layer Object Reference. The DataLayer to affect..

Is Loaded in Editor: Boolean. The new value of the flag IsLoadedInEditor. If True, the Editor loading will consider this DataLayer to load or not an Actor part of this DataLayer. An Actor will not be loaded in the Editor if all its DataLayers are not LoadedInEditor..

Is from User Change: Boolean. If this change originates from a user change or not..  

## Outputs

Out: Exec.

Return Value: Boolean.

