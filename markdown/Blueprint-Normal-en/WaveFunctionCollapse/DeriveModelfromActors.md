# DeriveModelfromActors

Derive constraints from a given layout of actors and append them to a model

Target is Wave Function Collapse BPLibrary

## 图示

![]($-20221218-21325096.png)

## Inputs

In: Exec.

Actors: Array of Actor Object References. array of actors to evaluate.

WFCModel: Wave Function Collapse Model Object Reference. to add constraints to.

Tile Size: Float (single-precision). distance between tiles.

Is Border Empty Option: Boolean. should the border be considered EmptyOption.

Is Min ZFloor Option: Boolean. should the minimum Z actors be considered floor options (nothing can go below it).

Use Uniform Weight Distribution: Boolean.

Auto Derive ZAxis Rotation Constraints: Boolean. should it auto derive z-axis rotational variants.

Spawn Exclusion Assets: Array of Soft Object Path Structures. assets to exclude when spawning.

Ignore Rotation Assets: Array of Soft Object Path Structures. assets to ignore rotation variants.  

## Outputs

Out: Exec.

