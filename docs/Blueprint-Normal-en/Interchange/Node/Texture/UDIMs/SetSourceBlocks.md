# SetSourceBlocks

Set the source blocks. Using this will force the texture factory to consider this texture as UDIM.

Target is Interchange Texture 2DNode

## 图示

![]($-20221218-19340490.png)

## Inputs

In: Exec.

Target: Interchange Texture 2DNode Object Reference.

In Source Blocks: Map of Integers to Strings. The blocks and their source image that compose the whole texture. The textures must be of the same format and use the same pixel format The first block inserted in the map be used to determine the accepted texture format and pixel format.  

## Outputs

Out: Exec.

