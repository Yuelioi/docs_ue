# EvaluateRootBone-

Evaluates timecode attributes (e.g. "TCFrame", "TCSecond", etc.) of the root bone and returns the resulting qualified frame time.

Target is Animation Blueprint Library

## 图示

![]($-20221218-17515543.png)

## Inputs

Animation Sequence Base: Anim Sequence Base Object Reference.

Eval Time: Float (single-precision).  

## Outputs

Out Qualified Frame Time: Qualified Frame Time Structure.

Return Value: Boolean. : true if the root bone had timecode attributes that could be evaluated and a qualified frame time was set, or false otherwise..

