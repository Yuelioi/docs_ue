# MatchesAnyTags

Determine if TagOne matches against any tag in OtherContainer

Target is Blueprint Gameplay Tag Library

## 图示

![]($-20221218-19094811.png)

## Inputs

Tag One: Gameplay Tag Structure. Tag to check for match.

Other Container: Gameplay Tag Container Structure (by ref). Container to check against..

Exact Match: Boolean. If true, the tag has to be exactly present, if false then TagOne will include it's parent tags while matching.  

## Outputs

Return Value: Boolean. True if TagOne matches any tags explicitly present in OtherContainer.

