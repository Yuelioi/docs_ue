# SetTile

Modifies the contents of a specified tile cell (Note: This will only work on components that own their own tile map (OwnsTileMap returns true), you cannot modify standalone tile map assets). Note: Does not update collision by default, call RebuildCollision after all edits have been done in a frame if necessary

Target is Paper Tile Map Component

## 图示

![]($-20221218-21025229.png)

## Inputs

In: Exec.

Target: Paper Tile Map Component Object Reference.

X: Integer.

Y: Integer.

Layer: Integer.

New Value: Paper Tile Info Structure.  

## Outputs

Out: Exec.

