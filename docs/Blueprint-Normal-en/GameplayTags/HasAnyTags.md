# HasAnyTags

Check if the specified tag container has ANY of the tags in the other container

Target is Blueprint Gameplay Tag Library

## 图示

![]($-20221218-19093518.png)

## Inputs

Tag Container: Gameplay Tag Container Structure (by ref). Container to check if it matches any of the tags in the other container.

Other Container: Gameplay Tag Container Structure (by ref). Container to check against..

Exact Match: Boolean. If true, the tag has to be exactly present, if false then TagContainer will include it's parent tags while matching.  

## Outputs

Return Value: Boolean. True if the container has ANY of the tags in the other container.

