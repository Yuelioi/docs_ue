# BreakMovieSceneMarkedFrame

Adds a node that breaks a 'MovieSceneMarkedFrame' into its member fields

## 图示

![]($-20221218-14402564.png)

## Inputs

Movie Scene Marked Frame: Movie Scene Marked Frame Structure (by ref).  

## Outputs

Frame Number: Frame Number Structure. Frame Number.

Label: String. Label.

Is Determinism Fence?: Boolean. Is Determinism Fence:. When checked, treat this mark as a fence for evaluation purposes. Fences cannot be crossed in a single evaluation, and force the evaluation to be split into 2 separate parts..

