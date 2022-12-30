# SavePackageswithDialog

Save all packages. Optionally prompting the user to select which packages to save.. Prompt the user to select which dirty packages to save and check them out from source control (if enabled).

Target is Editor Loading and Saving Utils

## 图示

![]($-20221218-18495352.png)

## Inputs

In: Exec.

Packages to Save: Array of Package Object References. The list of packages to save. Both map and content packages are supported.

Only Dirty: Boolean.  

## Outputs

Out: Exec.

Return Value: Boolean. true on success, false on fail..

