# EvaluateRootBone-

评估根骨的时间码属性（例如 "TCFrame"、"TCSecond "等），并返回结果的合格帧时间。

目标是动画蓝图库

## 图示

![]($-20221218-17515543.png)

## Inputs

动画序列库。Anim Sequence Base对象参考。

评估时间。Float（单精度）。 

## Outputs

Out Qualified Frame Time: 合格的帧时间结构。

返回值。Boolean（布尔）：如果根骨有可以评估的时间码属性并且设置了合格的帧时间，则为true；否则为false。
