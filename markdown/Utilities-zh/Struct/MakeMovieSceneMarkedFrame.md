# MakeMovieSceneMarkedFrame

Adds a node that create a 'MovieSceneMarkedFrame' from its members

## 图示

![]($-20221218-14581379.png)

## Inputs

Frame Number: Frame Number Structure. Frame Number.

Label: String. Label.

Is Determinism Fence?: Boolean. Is Determinism Fence:. When checked, treat this mark as a fence for evaluation purposes. Fences cannot be crossed in a single evaluation, and force the evaluation to be split into 2 separate parts..  

## Outputs

Movie Scene Marked Frame: Movie Scene Marked Frame Structure.

