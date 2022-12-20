# MakeFontOutlineSettings

Adds a node that create a 'FontOutlineSettings' from its members

## 图示

![]($-20221218-14525318.png)

## Inputs

Outline Size: Integer. Outline Size:. Size of the outline in slate units (at 1.0 font scale this unit is a pixel).

Separate Fill Alpha: Boolean. Separate Fill Alpha:. When enabled the outline will be completely translucent where the filled area will be. This allows for a separate fill alpha value. The trade off when enabling this is slightly worse quality for completely opaque fills where the inner outline border meets the fill area.

Apply Outline To Drop Shadows: Boolean. Apply Outline to Drop Shadows:. When enabled the outline will be applied to any drop shadow that uses this font.

Outline Material: Object Reference. Outline Material:. Optional material to apply to the outline.

Outline Color: Linear Color Structure. Outline Color:. The color of the outline for any character in this font.  

## Outputs

Font Outline Settings: Font Outline Settings Structure.

