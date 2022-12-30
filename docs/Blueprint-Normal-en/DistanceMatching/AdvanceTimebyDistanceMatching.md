# AdvanceTimebyDistanceMatching

Advance the sequence evaluator forward by distance traveled rather than time. A distance curve is required on the animation that. describes the distance traveled by the root bone in the animation. See UDistanceCurveModifier.

Target is Anim Distance Matching Library

## 图示

![]($-20221218-18431387.png)

## Inputs

In: Exec.

Update Context: Anim Update Context Structure (by ref). The update context provided in the anim node function..

Sequence Evaluator: Sequence Evaluator Reference Structure (by ref). The sequence evaluator node to operate on..

Distance Traveled: Float (single-precision). The distance traveled by the character since the last animation update..

Distance Curve Name: Name. Name of the curve we want to match.

Play Rate Clamp: Vector 2D Structure. A clamp on the effective play rate of the animation after distance matching. Set to (0,0) for no clamping..  

## Outputs

Out: Exec.

Return Value: Sequence Evaluator Reference Structure.

