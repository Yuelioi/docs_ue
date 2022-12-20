# RegenerateAllEntries

Full regeneration of all entries in the list. Note that the entry UWidget instances will not be destroyed, but they will be released and re-generated.. In other words, entry widgets will not receive Destruct/Construct events. They will receive OnEntryReleased and IUserObjectListEntry implementations will receive OnListItemObjectSet.

Target is List View Base

## 图示

![]($-20221218-19443917.png)

## Inputs

In: Exec.

Target: List View Base Object Reference.  

## Outputs

Out: Exec.

