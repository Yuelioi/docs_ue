# SelectActorsinLayer

Selects/de-selects actors belonging to the named layer.

Target is Layers Subsystem

## 图示

![]($-20221218-19380680.png)

## Inputs

In: Exec.

Target: Layers Subsystem Object Reference.

Layer Name: Name (by ref). A valid layer name..

Select: Boolean. If true actors are selected; if false, actors are deselected..

Notify: Boolean. If true the Editor is notified of the selection change; if false, the Editor will not be notified..

Select Even if Hidden: Boolean. [optional] If true even hidden actors will be selected; if false, hidden actors won't be selected..  

## Outputs

Out: Exec.

Return Value: Boolean. true if at least one actor was selected/deselected..

