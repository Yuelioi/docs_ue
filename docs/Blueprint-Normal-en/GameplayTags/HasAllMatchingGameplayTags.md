# HasAllMatchingGameplayTags

Check if the asset has gameplay tags that matches against all of the specified tags (expands to include parents of asset tags)

Target is Gameplay Tag Asset Interface

## 图示

![]($-20221218-19092928.png)

## Inputs

Target: Gameplay Tag Asset Interface Interface.

Tag Container: Gameplay Tag Container Structure (by ref). Tag container to check for a match.  

## Outputs

Return Value: Boolean. True if the asset has matches all of the gameplay tags, will be true if container is empty.

