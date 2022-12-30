# CreateNewGeometryCacheGroomBindi-

Create a new groom binding asset within the contents space of the project. The asset name will be auto generated based on the groom asset name and the skeletal asset name

Target is Groom Blueprint Library

## 图示

![]($-20221218-19154909.png)

## Inputs

In: Exec.

Groom Asset: Groom Asset Object Reference. Groom asset for binding.

Geometry Cache: Geometry Cache Object Reference.

Num Interpolation Points: Integer. (Optional) Number of point used for RBF constraint.

Source Geometry Cache for Transfer: Geometry Cache Object Reference.

Matching Section: Integer.  

## Outputs

Out: Exec.

Return Value: Groom Binding Asset Object Reference.

