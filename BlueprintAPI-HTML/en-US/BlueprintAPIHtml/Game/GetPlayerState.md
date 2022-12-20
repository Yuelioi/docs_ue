# GetPlayerState

Returns the player state at the given index in the game state's PlayerArray.. This will work on both the client and server and the index will be consistent.. After initial replication, all clients and the server will have access to PlayerStates for all connected players.

Target is Gameplay Statics

## 图示

![]($-20221218-19062431.png)

## Inputs

Player State Index: Integer. Index into the game state's PlayerArray.  

## Outputs

Return Value: Player State Object Reference.

