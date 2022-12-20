# DistanceMatchtoTarget

Set the time of the sequence evaluator to the point in the animation where the distance curve matches the DistanceToTarget input.. A common use case is to achieve stops without foot sliding by, each frame, selecting the point in the animation that matches the distance the character has remaining until it stops.. Note that because this technique sets the time of the animation by distance remaining, it doesn't respect phase of any previous animation (e.g. from a jog cycle).

Target is Anim Distance Matching Library

## 图示

![]($-20221218-18431501.png)

## Inputs

In: Exec.

Sequence Evaluator: Sequence Evaluator Reference Structure (by ref). The sequence evaluator node to operate on..

Distance to Target: Float (single-precision). The distance remaining to a target (e.g. a stop or pivot point)..

Distance Curve Name: Name. Name of the curve we want to match.  

## Outputs

Out: Exec.

Return Value: Sequence Evaluator Reference Structure.

