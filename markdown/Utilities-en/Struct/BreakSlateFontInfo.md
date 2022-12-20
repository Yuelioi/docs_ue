# BreakSlateFontInfo

Adds a node that breaks a 'SlateFontInfo' into its member fields

## 图示

![]($-20221218-14424837.png)

## Inputs

Slate Font Info: Slate Font Info Structure (by ref).  

## Outputs

Font Family: Object Reference. Font Object:. The font object (valid when used from UMG or a Slate widget style asset).

Font Material: Object Reference. Font Material:. The material to use when rendering this font.

Outline Settings: Font Outline Settings Structure. Outline Settings:. Settings for applying an outline to a font.

Typeface: Name. Typeface Font Name:. The name of the font to use from the default typeface (None will use the first entry).

Size: Integer. Size:. The font size is a measure in point values. The conversion of points to Slate Units is done at 96 dpi. So if. you're using a tool like Photoshop to prototype layouts and UI mock ups, be sure to change the default dpi. measurements from 72 dpi to 96 dpi..

Letter Spacing: Integer. Letter Spacing:. The uniform spacing (or tracking) between all characters in the text..

