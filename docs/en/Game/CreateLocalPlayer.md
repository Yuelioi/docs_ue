# CreateLocalPlayer

Create a new local player for this game, for cases like local multiplayer.

Target is Gameplay Statics

## 图示

![]($-20221218-19052484.png)

## Inputs

In: Exec.

Controller Id: Integer. The ID of the physical controller that the should control the newly created player. A value of -1 specifies to use the next available ID.

Spawn Player Controller: Boolean. Whether a player controller should be spawned immediately for this player. If false a player controller will not be created automatically until transition to the next map..  

## Outputs

Out: Exec.

Return Value: Player Controller Object Reference. The created player controller if one is created..

