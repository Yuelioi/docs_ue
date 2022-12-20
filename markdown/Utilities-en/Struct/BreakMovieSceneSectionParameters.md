# BreakMovieSceneSectionParameters

Adds a node that breaks a 'MovieSceneSectionParameters' into its member fields

## 图示

![]($-20221218-14402651.png)

## Inputs

Movie Scene Section Parameters: Movie Scene Section Parameters Structure (by ref).  

## Outputs

Start Frame Offset: Frame Number Structure. Start Frame Offset:. Number of frames (in display rate) to skip at the beginning of the sub-sequence..

Can Loop: Boolean. Can Loop:. Whether this section supports looping the sub-sequence..

End Frame Offset: Frame Number Structure. End Frame Offset:. Number of frames (in display rate) to skip at the beginning of the sub-sequence..

First Loop Start Frame Offset: Frame Number Structure. First Loop Start Frame Offset:. Number of frames (in display rate) to offset the first loop of the sub-sequence..

Time Scale: Float (single-precision). Time Scale:. Playback time scaling factor..

Hierarchical Bias: Integer. Hierarchical Bias:. Hierachical bias. Higher bias will take precedence..

