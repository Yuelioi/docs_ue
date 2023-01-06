# ExportStaticMeshtoPFMfile

从静态网格生成PFM文件...必须定义UV通道，指定范围0...1作为屏幕表面。原点由函数参数指定，或默认使用网格父体。

目标是PFMExporter蓝图API

## 图示

![]($-20221218-20202166.png)

## Inputs

在。执行。

目标。PFMExporter蓝图API接口。

Src网格。静态网格组件对象参考。具有指定UV通道的静态网格，作为PFM文件的导出源。

原点。场景组件对象参考。(可选）自定义洞穴原点节点，如果没有定义，则使用SrcMesh父节点。

Width: 整数。输出PFM网格纹理宽度。

高度：整数。输出PFM网格纹理高度。

文件名称。字符串。输出PFM文件名。  

## Outputs

出：执行。

返回值。布尔值。如果成功，为true。

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

