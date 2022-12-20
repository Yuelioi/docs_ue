# MovetoLocation

Move to the specified location, using the vector curve (range 0 - 1) if specified, otherwise the float curve (range 0 - 1) or fallback to linear interpolation

Target is Ability Task Move to Location

## 图示

![]($-20221218-17331092.png)

## Inputs

In: Exec.

Task Instance Name: Name.

Location: Vector.

Duration: Float (single-precision).

Optional Interpolation Curve: Curve Float Object Reference.

Optional Vector Interpolation Curve: Curve Vector Object Reference.  

## Outputs

Out: Exec.

Async Task: Ability Task Move To Location Object Reference.

On Target Location Reached: Exec. On Target Location Reached.

