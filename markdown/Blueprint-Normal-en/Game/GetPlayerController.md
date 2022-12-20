# GetPlayerController

Returns the player controller found while iterating through the local and available remote player controllers.. On a network client, this will only include local players as remote player controllers are not available.. The index will be consistent as long as no new players join or leave, but it will not be the same across different clients and servers.

Target is Gameplay Statics

## 图示

![]($-20221218-19062196.png)

## Inputs

Player Index: Integer. Index in the player controller list, starting first with local players and then available remote ones.  

## Outputs

Return Value: Player Controller Object Reference.

