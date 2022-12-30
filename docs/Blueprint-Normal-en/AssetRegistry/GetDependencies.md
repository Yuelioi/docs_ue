# GetDependencies

Gets a list of paths to objects that are referenced by the supplied package. (On disk references ONLY)

Target is Asset Registry

## 图示

![]($-20221218-18004371.png)

## Inputs

In: Exec.

Target: Asset Registry Interface.

Package Name: Name. the name of the package for which to gather dependencies (eg, /Game/MyFolder/MyAsset).

Dependency Options: Asset Registry Dependency Options Structure (by ref). which kinds of dependencies to include in the output list.  

## Outputs

Out: Exec.

Out Dependencies: Array of Names. a list of packages that are referenced by the package whose path is PackageName.

Return Value: Boolean.

