# SaveDirtyPackages

Looks at all currently loaded packages and saves them if their "bDirty" flag is set.. Assume all dirty packages should be saved and check out from source control (if enabled).

Target is Editor Loading and Saving Utils

## 图示

![]($-20221218-18494818.png)

## Inputs

In: Exec.

Save Map Packages: Boolean. true if map packages should be saved.

Save Content Packages: Boolean. true if we should save content packages..  

## Outputs

Out: Exec.

Return Value: Boolean. true on success, false on fail..

