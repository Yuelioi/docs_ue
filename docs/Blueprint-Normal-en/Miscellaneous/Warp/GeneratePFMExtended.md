# GeneratePFMExtended

Generate and save data to a PFM file. Additionally, we have an array of tiles validiy flags (false == all pixels of a tile are NaN)

Target is Warp Utils Blueprint Library

## 图示

![]($-20221218-20060264.png)

## Inputs

In: Exec.

File: String.

Start Location: Vector (by ref).

Start Rotation: Rotator (by ref).

PFMOrigin: Actor Object Reference.

Tiles Horizontal: Integer.

Tiles Vertical: Integer.

Column Angle: Float (single-precision).

Tile Size Horizontal: Float (single-precision).

Tile Size Vertical: Float (single-precision).

Tile Pixels Horizontal: Integer.

Tile Pixels Vertical: Integer.

Add Margin: Boolean.

Tiles Validity Flags: Array of Booleans.  

## Outputs

Out: Exec.

Return Value: Boolean. Generate and save data to a PFM file. Additionally, we have an array of tiles validiy flags (false == all pixels of a tile are NaN).

