# MovetoActor

Makes AI go toward specified Goal actor (destination will be continuously updated), aborts any active path following

Target is AIController

## 图示

![]($-20221218-17473186.png)

## Inputs

In: Exec.

Target: AIController Object Reference.

Goal: Actor Object Reference.

Acceptance Radius: Float (single-precision). finish move if pawn gets close enough.

Stop on Overlap: Boolean. add pawn's radius to AcceptanceRadius.

Use Pathfinding: Boolean. use navigation data to calculate path (otherwise it will go in straight line).

Can Strafe: Boolean. set focus related flag: bAllowStrafe.

Filter Class: Navigation Query Filter Class Reference. navigation filter for pathfinding adjustments. If none specified DefaultNavigationFilterClass will be used.

Allow Partial Path: Boolean. use incomplete path when goal can't be reached.  

## Outputs

Out: Exec.

Return Value: EPathFollowingRequestResult Enum.

