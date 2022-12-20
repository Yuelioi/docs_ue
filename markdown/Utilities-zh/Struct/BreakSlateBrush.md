# BreakSlateBrush

Adds a node that breaks a 'SlateBrush' into its member fields

## 图示

![]($-20221218-14424490.png)

## Inputs

Slate Brush: Slate Brush Structure (by ref).  

## Outputs

Image Size: Vector 2D Structure. Image Size:. Size of the resource in Slate Units.

Margin: Margin Structure. Margin:. The margin to use in Box and Border modes.

Tint: Slate Color Structure. Tint Color:. Tinting applied to the image..

Outline Settings: Slate Brush Outline Settings Structure. Outline Settings:. How to draw the outline. Currently only used for RoundedBox type brushes..

Image: Object Reference. Resource Object:. The image to render for this brush, can be a UTexture or UMaterialInterface or an object implementing. the AtlasedTextureInterface..

Draw As: ESlateBrushDrawType Enum. Draw As:. How to draw the image.

Tiling: ESlateBrushTileType Enum. Tiling:. How to tile the image in Image mode.

Mirroring: ESlateBrushMirrorType Enum. Mirroring:. How to mirror the image in Image mode. This is normally only used for dynamic image brushes where the source texture. comes from a hardware device such as a web camera..

