# ApplyRuntimeChanges

In case you want to change the Origin or CRS definition properties during application execution, you need to call this function to update the internal transformation cache.. Note this is not a recommended practice, because it will not move the level actors accordingly.. Can be useful though if you rebase your actors yourself, or if you want to change one CRS used for displaying coordinates.

Target is Geo Referencing System

## 图示

![]($-20221218-19141338.png)

## Inputs

In: Exec.

Target: Geo Referencing System Object Reference.  

## Outputs

Out: Exec.

