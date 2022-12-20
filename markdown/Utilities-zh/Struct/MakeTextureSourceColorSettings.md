# MakeTextureSourceColorSettings

Adds a node that create a 'TextureSourceColorSettings' from its members

## 图示

![]($-20221218-15031823.png)

## Inputs

Encoding Override: ETextureSourceEncoding Enum. Encoding Override:. Source encoding of the texture, exposing more options than just sRGB..

Color Space: ETextureColorSpace Enum. Color Space:. Source color space of the texture..

Red Chromaticity Coordinate: Vector 2D Structure. Red Chromaticity Coordinate:. Red chromaticity coordinate of the source color space..

Green Chromaticity Coordinate: Vector 2D Structure. Green Chromaticity Coordinate:. Green chromaticity coordinate of the source color space..

Blue Chromaticity Coordinate: Vector 2D Structure. Blue Chromaticity Coordinate:. Blue chromaticity coordinate of the source color space..

White Chromaticity Coordinate: Vector 2D Structure. White Chromaticity Coordinate:. White chromaticity coordinate of the source color space..

Chromatic Adaptation Method: ETextureChromaticAdaptationMethod Enum. Chromatic Adaptation Method:. Chromatic adaption method applied if the source white point differs from the working color space white point..  

## Outputs

Texture Source Color Settings: Texture Source Color Settings Structure.

