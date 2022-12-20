# GetReferencers_Message

Gets a list of packages that reference the supplied package. (On disk references ONLY)

Target is Asset Registry

## 图示

![]($-20221218-18004712.png)

## Inputs

In: Exec.

Target: Object Reference.

Package Name: Name. the name of the package for which to gather dependencies (eg, /Game/MyFolder/MyAsset).

Reference Options: Asset Registry Dependency Options Structure (by ref). which kinds of references to include in the output list.  

## Outputs

Out: Exec.

Out Referencers: Array of Names. a list of packages that reference the package whose path is PackageName.

Return Value: Boolean.

