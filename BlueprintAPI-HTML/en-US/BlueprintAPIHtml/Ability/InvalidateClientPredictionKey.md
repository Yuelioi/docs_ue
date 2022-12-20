# InvalidateClientPredictionKey

Invalidates the current prediction key. This should be used in cases where there is a valid prediction window, but the server is doing logic that only he can do, and afterwards performs an action that the client could predict (had the client been able to run the server-only code prior).. This returns instantly and has no other side effects other than clearing the current prediction key.

Target is Gameplay Ability

## 图示

![]($-20221218-17322212.png)

## Inputs

In: Exec.

Target: Gameplay Ability Object Reference.  

## Outputs

Out: Exec.

