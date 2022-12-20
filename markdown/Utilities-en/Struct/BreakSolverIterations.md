# BreakSolverIterations

Adds a node that breaks a 'SolverIterations' into its member fields

## 图示

![]($-20221218-14425540.png)

## Inputs

## Outputs

Solver Iterations: Integer. Solver Iterations:. The recommended number of solver iterations. Increase this if collision and joints are fighting, or joint chains are stretching..

Joint Iterations: Integer. Joint Iterations:. The recommended number of joint sub-iterations. Increasing this can help with chains of long-thin bodies..

Collision Iterations: Integer. Collision Iterations:. The recommended number of collision sub-iterations. Increasing this can help with collision jitter..

Solver Push Out Iterations: Integer. Solver Push Out Iterations:. Increase this if bodies remain penetrating.

Joint Push Out Iterations: Integer. Joint Push Out Iterations:. The recommended number of joint sub-push-out iterations..

Collision Push Out Iterations: Integer. Collision Push Out Iterations:. The recommended number of joint sub-push-out iterations. Increasing this can help with collision penetration problems..

