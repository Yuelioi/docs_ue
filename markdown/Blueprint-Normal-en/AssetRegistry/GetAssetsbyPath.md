# GetAssetsbyPath

Gets asset data for all assets in the supplied folder path

Target is Asset Registry

## 图示

![]($-20221218-18003815.png)

## Inputs

In: Exec.

Target: Asset Registry Interface.

Package Path: Name. the path to query asset data in (eg, /Game/MyFolder).

Recursive: Boolean. if true, all supplied paths will be searched recursively.

Include Only on Disk Assets: Boolean.  

## Outputs

Out: Exec.

Out Asset Data: Array of Asset Data Structures. the list of assets in this path.

Return Value: Boolean.

