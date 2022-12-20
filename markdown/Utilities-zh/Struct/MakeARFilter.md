# MakeARFilter

Adds a node that create a 'ARFilter' from its members

## 图示

![]($-20221218-14470176.png)

## Inputs

Package Names: Array of Names. Package Names:. The filter component for package names.

Package Paths: Array of Names. Package Paths:. The filter component for package paths.

Object Paths: Array of Names. Object Paths:. The filter component containing specific object paths.

Class Names: Array of Names. Class Names:. The filter component for class names. Instances of the specified classes, but not subclasses (by default), will be included. Derived classes will be included only if bRecursiveClasses is true..

Recursive Classes Exclusion Set: Set of Names. Recursive Classes Exclusion Set:. Only if bRecursiveClasses is true, the results will exclude classes (and subclasses) in this list.

Recursive Paths: Boolean. Recursive Paths:. If true, PackagePath components will be recursive.

Recursive Classes: Boolean. Recursive Classes:. If true, subclasses of ClassNames will also be included and RecursiveClassesExclusionSet will be excluded..

Include Only On Disk Assets: Boolean. Include Only on Disk Assets:. If true, only on-disk assets will be returned. Be warned that this is rarely what you want and should only be used for performance reasons.  

## Outputs

ARFilter: ARFilter Structure.

