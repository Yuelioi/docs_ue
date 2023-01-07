# EvaluateRootBone-

评估根骨的时间码属性（例如 "TCFrame"、"TCSecond "等），并返回结果的合格帧时间。

目标是动画蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-17515543.png)

## Inputs

动画序列库。Anim Sequence Base 对象参考。

评估时间。Float（单精度）。

## Outputs

Out Qualified Frame Time: 合格的帧时间结构。

返回值。Boolean（布尔）：如果根骨有可以评估的时间码属性并且设置了合格的帧时间，则为 true；否则为 false。

<hr>

Evaluates timecode attributes (e.g. "TCFrame", "TCSecond", etc.) of the root bone and returns the resulting qualified frame time.

Target is Animation Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-17515543.png)

## Inputs

Animation Sequence Base: Anim Sequence Base Object Reference.

Eval Time: Float (single-precision).

## Outputs

Out Qualified Frame Time: Qualified Frame Time Structure.

Return Value: Boolean. : true if the root bone had timecode attributes that could be evaluated and a qualified frame time was set, or false otherwise..
