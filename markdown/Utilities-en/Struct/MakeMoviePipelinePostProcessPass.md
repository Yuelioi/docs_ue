# MakeMoviePipelinePostProcessPass

Adds a node that create a 'MoviePipelinePostProcessPass' from its members

## 图示

![]($-20221218-14580475.png)

## Inputs

Enabled: Boolean. Enabled:. Additional passes add a significant amount of render time. May produce multiple output files if using Screen Percentage..

Material: Material Interface Soft Object Reference. Material:. Material should be set to Post Process domain, and Blendable Location = After Tonemapping.. This will need bDisableMultisampleEffects enabled for pixels to line up(ie : no DoF, MotionBlur, TAA).  

## Outputs

Movie Pipeline Post Process Pass: Movie Pipeline Post Process Pass Structure.

