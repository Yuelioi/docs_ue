# GetPlayerCharacter

Returns the pawn for the player controller at the specified player index, will return null if the pawn is not a character.. This will not include characters of remote clients with no available player controller, you can iterate the PlayerStates list for that.

Target is Gameplay Statics

## 图示

![]($-20221218-19062082.png)

## Inputs

Player Index: Integer. Index in the player controller list, starting first with local players and then available remote ones.  

## Outputs

Return Value: Character Object Reference.

