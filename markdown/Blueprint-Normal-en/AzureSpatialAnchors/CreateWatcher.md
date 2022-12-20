# CreateWatcher

Create and start a 'Watcher' searching for azure cloud spatial anchors as specified in the locate criteria. Use an AzureSpatialAnchorsEventComponent's events to get. notifications of found anchors and watcher completion.

Target is Azure Spatial Anchors Library

## 图示

![]($-20221218-18101103.png)

## Inputs

In: Exec.

In Locate Criteria: Azure Spatial Anchors Locate Criteria Structure (by ref). Structure describing the watcher we wish to start..  

## Outputs

Out: Exec.

Out Watcher Identifier: Integer. The ID of the created watcher (can be used to stop the watcher)..

Out Result: EAzureSpatialAnchorsResult Enum. The Result enumeration..

Out Error String: String. Additional information about the OutResult (often empty)..

