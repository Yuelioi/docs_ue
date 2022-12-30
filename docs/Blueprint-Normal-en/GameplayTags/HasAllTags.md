# HasAllTags

Check if the specified tag container has ALL of the tags in the other container

Target is Blueprint Gameplay Tag Library

## 图示

![]($-20221218-19093162.png)

## Inputs

Tag Container: Gameplay Tag Container Structure (by ref). Container to check if it matches all of the tags in the other container.

Other Container: Gameplay Tag Container Structure (by ref). Container to check against. If this is empty, the check will succeed.

Exact Match: Boolean. If true, the tag has to be exactly present, if false then TagContainer will include it's parent tags while matching.  

## Outputs

Return Value: Boolean. True if the container has ALL of the tags in the other container.

