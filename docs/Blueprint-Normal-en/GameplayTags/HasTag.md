# HasTag

Check if the tag container has the specified tag

Target is Blueprint Gameplay Tag Library

## 图示

![]($-20221218-19093857.png)

## Inputs

Tag Container: Gameplay Tag Container Structure (by ref). Container to check for the tag.

Tag: Gameplay Tag Structure. Tag to check for in the container.

Exact Match: Boolean. If true, the tag has to be exactly present, if false then TagContainer will include it's parent tags while matching.  

## Outputs

Return Value: Boolean. True if the container has the specified tag, false if it does not.

