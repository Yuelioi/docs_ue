# SavePackages

Save all packages.. Assume all dirty packages should be saved and check out from source control (if enabled).

Target is Editor Loading and Saving Utils

## 图示

![]($-20221218-18495212.png)

## Inputs

In: Exec.

Packages to Save: Array of Package Object References. The list of packages to save. Both map and content packages are supported.

Only Dirty: Boolean.  

## Outputs

Out: Exec.

Return Value: Boolean. true on success, false on fail..

