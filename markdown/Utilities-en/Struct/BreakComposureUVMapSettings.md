# BreakComposureUVMapSettings

Adds a node that breaks a 'ComposureUVMapSettings' into its member fields

## 图示

![]($-20221218-14324900.png)

## Inputs

Composure UVMap Settings: Composure UVMap Settings Structure (by ref).  

## Outputs

Pre UVDisplacement Matrix: Matrix Structure. Pre UVDisplacement Matrix:. UV Matrix to apply before sampling DisplacementTexture..

Post UVDisplacement Matrix: Matrix Structure. Post UVDisplacement Matrix:. UV Matrix to apply after displacing UV using DisplacementTexture..

Displacement Decode Parameters: Vector 2D Structure. Displacement Decode Parameters:. Decoding parameters for DisplacementTexture. DeltaUV = ((RedChannel, GreenChannel) - Y) * X..

Displacement Texture: Texture Object Reference. Displacement Texture:. Displacement texture to use..

Use Displacement Blue And Alpha Channels: Boolean. Use Displacement Blue and Alpha Channels:. Whether to use blue and alpha channel instead of red and green channel in computation of DeltaUV..

