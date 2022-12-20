# MoveToLocationorActor

AIMove To

Target is AITask Move To

## 图示

![]($-20221218-17484157.png)

## Inputs

In: Exec.

Controller: AIController Object Reference.

Goal Location: Vector.

Goal Actor: Actor Object Reference.

Acceptance Radius: Float (single-precision).

Stop on Overlap: EAIOptionFlag Enum.

Accept Partial Path: EAIOptionFlag Enum.

Use Pathfinding: Boolean.

Lock AILogic: Boolean.

Use Continuos Goal Tracking: Boolean.

Project Goal on Navigation: EAIOptionFlag Enum.  

## Outputs

Out: Exec.

Async Task: AITask Move To Object Reference.

On Request Failed: Exec. On Request Failed.

On Move Finished: Exec. On Move Finished.

