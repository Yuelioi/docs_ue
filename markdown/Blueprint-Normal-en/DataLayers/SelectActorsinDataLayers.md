# SelectActorsinDataLayers

Selects/de-selects actors belonging to the DataLayers.

Target is Data Layer Editor Subsystem

## 图示

![]($-20221218-18351671.png)

## Inputs

In: Exec.

Target: Data Layer Editor Subsystem Object Reference.

Data Layers: Array of Data Layer Object References. A valid list of DataLayers..

Select: Boolean. If true actors are selected; if false, actors are deselected..

Notify: Boolean. If true the Editor is notified of the selection change; if false, the Editor will not be notified.

Select Even if Hidden: Boolean. [optional] If true even hidden actors will be selected; if false, hidden actors won't be selected..  

## Outputs

Out: Exec.

Return Value: Boolean. true if at least one actor was selected/deselected..

