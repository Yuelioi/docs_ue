# SetPlayratetoMatchSpeed

Set the play rate of the sequence player so that the speed of the animation matches in-game movement speed.. While distance matching is commonly used for transition animations, cycle animations (walk, jog, etc) typically just adjust their play rate to match. the in-game movement speed.. This function assumes that the animation has a constant speed.

Target is Anim Distance Matching Library

## 图示

![]($-20221218-18431616.png)

## Inputs

In: Exec.

Sequence Player: Sequence Player Reference Structure (by ref). The sequence player node to operate on..

Speed to Match: Float (single-precision). The in-game movement speed to match. This is usually the current speed of the movement component..

Play Rate Clamp: Vector 2D Structure. A clamp on how much the animation's play rate can change to match the in-game movement speed. Set to (0,0) for no clamping..  

## Outputs

Out: Exec.

Return Value: Sequence Player Reference Structure.

