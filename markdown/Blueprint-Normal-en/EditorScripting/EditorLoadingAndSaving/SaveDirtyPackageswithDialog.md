# SaveDirtyPackageswithDialog

Looks at all currently loaded packages and saves them if their "bDirty" flag is set.. Prompt the user to select which dirty packages to save and check them out from source control (if enabled).

Target is Editor Loading and Saving Utils

## 图示

![]($-20221218-18494947.png)

## Inputs

In: Exec.

Save Map Packages: Boolean. true if map packages should be saved.

Save Content Packages: Boolean. true if we should save content packages..  

## Outputs

Out: Exec.

Return Value: Boolean. true on success, false on fail..

