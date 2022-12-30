# Possess

Handles attaching this controller to the specified pawn.. Only runs on the network authority (where HasAuthority() returns true).. Derived native classes can override OnPossess to filter the specified pawn.. When possessed pawn changed, blueprint class gets notified by ReceivePossess. and OnNewPawn delegate is broadcasted.

Target is Controller

## 图示

![]($-20221218-20193580.png)

## Inputs

In: Exec.

Target: Controller Object Reference.

In Pawn: Pawn Object Reference. The Pawn to be possessed..  

## Outputs

Out: Exec.

