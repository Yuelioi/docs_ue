# GetDataRegistryItem_experimental

Attempts to get cached structure data stored in a DataRegistry, modifying OutItem if the item is available. (EXPERIMENTAL) this version has an input param and simple bool return

Target is Data Registry Subsystem

## 图示

![]($-20221218-18362549.png)

## Inputs

In: Exec.

Item Id: Data Registry Id Structure. Item identifier to lookup in cache.

Out Item: Wildcard (by ref). This must be the same type as the registry, if the item is found this will be filled in with the found data.  

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if the item was found and OutItem was modified.

