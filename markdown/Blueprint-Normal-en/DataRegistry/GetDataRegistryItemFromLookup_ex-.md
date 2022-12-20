# GetDataRegistryItemFromLookup_ex-

Attempts to get structure data stored in a DataRegistry cache after an async acquire, modifying OutItem if the item is available

Target is Data Registry Subsystem

## 图示

![]($-20221218-18362425.png)

## Inputs

In: Exec.

Item Id: Data Registry Id Structure. Item identifier to lookup in cache.

Resolved Lookup: Data Registry Lookup Structure (by ref). Resolved identifier returned by acquire function.  

## Outputs

Out: Exec.

Out Item: Wildcard. This must be the same type as the registry, if the item is found this will be filled in with the found data.

Return Value: Boolean. Returns true if the item was found and OutItem was modified.

