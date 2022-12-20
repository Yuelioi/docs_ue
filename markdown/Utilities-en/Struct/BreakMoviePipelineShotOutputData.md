# BreakMoviePipelineShotOutputData

Adds a node that breaks a 'MoviePipelineShotOutputData' into its member fields

## 图示

![]($-20221218-14402292.png)

## Inputs

Movie Pipeline Shot Output Data: Movie Pipeline Shot Output Data Structure (by ref).  

## Outputs

Shot: Movie Pipeline Executor Shot Weak object. Shot:. Which shot was this output data for?.

Render Pass Data: Map of Movie Pipeline Pass Identifier Structures to Movie Pipeline Render Pass Output Data Structures. Render Pass Data:. A mapping between render passes (such as 'FinalImage') and an array containing the files written for that shot.. Will be multiple files if using image sequences..

