# MakeAITestSpawnInfo

Adds a node that create a 'AITestSpawnInfo' from its members

## 图示

![]($-20221218-14463387.png)

## Inputs

Pawn Class: Pawn Class Reference. Pawn Class:. Determines AI to be spawned.

Controller Class: AIController Class Reference. Controller Class:. class to override default pawn's controller class. If None the default will be used.

Team ID: Generic Team Id Structure. Team ID.

Behavior Tree: Behavior Tree Object Reference. Behavior Tree:. if set will be applied to spawned AI.

Spawn Location: Actor Object Reference. Spawn Location:. Where should AI be spawned.

Number To Spawn: Integer. Number to Spawn.

Spawn Delay: Float (single-precision). Spawn Delay:. delay between consecutive spawn attempts.

Pre Spawn Delay: Float (single-precision). Pre Spawn Delay:. delay before attempting first spawn.  

## Outputs

AITest Spawn Info: AITest Spawn Info Structure.

