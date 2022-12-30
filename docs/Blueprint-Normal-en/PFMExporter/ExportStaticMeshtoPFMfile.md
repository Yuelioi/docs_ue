# ExportStaticMeshtoPFMfile

Generate PFM file from static mesh.. The UV channel must be defined, assigned range 0..1 used as screen surface.. Origin assigned by function arg, or by default used mesh parent.

Target is PFMExporter Blueprint API

## 图示

![]($-20221218-20202166.png)

## Inputs

In: Exec.

Target: PFMExporter Blueprint API Interface.

Src Mesh: Static Mesh Component Object Reference. Static mesh with assigned UV channel, used as export source of PFM file.

Origin: Scene Component Object Reference. (Optional) Custom cave origin node, if not defined, used SrcMesh parent.

Width: Integer. Output PFM mesh texture width.

Height: Integer. Output PFM mesh texture height.

File Name: String. Output PFM file name.  

## Outputs

Out: Exec.

Return Value: Boolean. true, if success.

