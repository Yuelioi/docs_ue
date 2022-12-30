# FindDataRegistryItem_experimenta-

Attempts to get cached structure data stored in a DataRegistry, modifying OutItem if the item is available. (EXPERIMENTAL) this version has an output param and enum result

Target is Data Registry Subsystem

## 图示

![]($-20221218-18362312.png)

## Inputs

In: Exec.

Item Id: Data Registry Id Structure. Item identifier to lookup in cache.  

## Outputs

Found: Exec. Found the row successfully..

Not Found: Exec. Failed to find the row..

Out Item: Wildcard. This must be the same type as the registry, if the item is found this will be filled in with the found data.

