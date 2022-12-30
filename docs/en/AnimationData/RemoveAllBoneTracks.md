# RemoveAllBoneTracks

Removes all existing Bone Animation tracks. Broadcasts a EAnimDataModelNotifyType::TrackRemoved for each removed track, wrapped within BracketOpened/BracketClosed notifies.

Target is Animation Data Controller

## 图示

![]($-20221218-17532630.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

