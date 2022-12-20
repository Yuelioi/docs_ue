# MakeAudioMeterStyle

Adds a node that create a 'AudioMeterStyle' from its members

## 图示

![]($-20221218-14473034.png)

## Inputs

Meter Value Image: Slate Brush Structure. Meter Value Image:. Image to use to represent the meter value..

Background Image: Slate Brush Structure. Background Image:. Image to use to represent the background..

Meter Background Image: Slate Brush Structure. Meter Background Image:. Image to use to represent the meter background..

Meter Value Background Image: Slate Brush Structure. Meter Value Background Image:. Image to use to draw behind the meter value..

Meter Peak Image: Slate Brush Structure. Meter Peak Image:. Image to use to represent the meter peak..

Meter Size: Vector 2D Structure. Meter Size:. How thick to draw the meter.

Meter Padding: Vector 2D Structure. Meter Padding:. How much padding to add around the meter.

Meter Value Padding: Float (single-precision). Meter Value Padding:. How much padding to add around the meter value.

Peak Value Width: Float (single-precision). Peak Value Width:. How wide to draw the peak value indicator.

Value Range Db: Vector 2D Structure. Value Range Db:. The minimum and maximum value to display in dB (values are clamped in this range).

Show Scale: Boolean. Show Scale:. Whether or not to show the decibel scale alongside the meter.

Scale Side: Boolean. Scale Side:. Which side to show the scale. If vertical, true means left side, false means right side. If horizontal, true means above, false means below..

Scale Hash Offset: Float (single-precision). Scale Hash Offset:. Offset for the hashes.

Scale Hash Width: Float (single-precision). Scale Hash Width:. The width of each hash mark.

Scale Hash Height: Float (single-precision). Scale Hash Height:. The height of each hash mark.

Decibels Per Hash: Integer. Decibels Per Hash:. How wide to draw the decibel scale, if it's enabled.

Font: Slate Font Info Structure. Font:. Font family and size to be used when displaying the meter scale..  

## Outputs

Audio Meter Style: Audio Meter Style Structure.

