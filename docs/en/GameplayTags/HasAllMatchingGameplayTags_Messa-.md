# HasAllMatchingGameplayTags_Messa-

Check if the asset has gameplay tags that matches against all of the specified tags (expands to include parents of asset tags)

Target is Gameplay Tag Asset Interface

## 图示

![]($-20221218-19093043.png)

## Inputs

In: Exec.

Target: Object Reference.

Tag Container: Gameplay Tag Container Structure (by ref). Tag container to check for a match.  

## Outputs

Out: Exec.

Return Value: Boolean. True if the asset has matches all of the gameplay tags, will be true if container is empty.

