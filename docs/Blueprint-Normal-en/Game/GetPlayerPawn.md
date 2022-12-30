# GetPlayerPawn

Returns the pawn for the player controller at the specified player index.. This will not include pawns of remote clients with no available player controller, you can use the player states list for that.

Target is Gameplay Statics

## 图示

![]($-20221218-19062316.png)

## Inputs

Player Index: Integer. Index in the player controller list, starting first with local players and then available remote ones.  

## Outputs

Return Value: Pawn Object Reference.

