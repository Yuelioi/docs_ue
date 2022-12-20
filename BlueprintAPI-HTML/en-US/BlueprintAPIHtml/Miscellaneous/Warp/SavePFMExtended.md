# SavePFMExtended

Save data to a PFM file. Since the float NaN value is not available in blueprints, we provide a flags array (false == NaN)

Target is Warp Utils Blueprint Library

## 图示

![]($-20221218-20060506.png)

## Inputs

In: Exec.

File: String.

Tex Width: Integer.

Tex Height: Integer.

Vertices: Array of Vectors.

Tiles Validity Flags: Array of Booleans.  

## Outputs

Out: Exec.

Return Value: Boolean. Save data to a PFM file. Since the float NaN value is not available in blueprints, we provide a flags array (false == NaN).

