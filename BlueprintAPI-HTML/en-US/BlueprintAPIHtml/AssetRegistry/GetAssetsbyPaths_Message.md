# GetAssetsbyPaths_Message

Gets asset data for all assets in any of the supplied folder paths

Target is Asset Registry

## 图示

![]($-20221218-18004030.png)

## Inputs

In: Exec.

Target: Object Reference.

Package Paths: Array of Names. the paths to query asset data in (eg, /Game/MyFolder).

Recursive: Boolean. if true, all supplied paths will be searched recursively.

Include Only on Disk Assets: Boolean.  

## Outputs

Out: Exec.

Out Asset Data: Array of Asset Data Structures. the list of assets in this path.

Return Value: Boolean.

