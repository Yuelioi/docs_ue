# Add

Adds a key and value to the map. If something already uses the provided key it will be overwritten with the new value.. After calling Key is guaranteed to be associated with Value until a subsequent mutation of the Map.

Target is Blueprint Map Library

## 图示

![]($-20221218-14265348.png)

## Inputs

In: Exec.

Target Map: Map of Wildcards to Wildcards. The map to add the key and value to.

Key: Wildcard (by ref). The key that will be used to look the value up.

Value: Wildcard (by ref). The value to be retrieved later.  

## Outputs

Out: Exec.

