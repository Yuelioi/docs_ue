# ExportStaticMeshtoPFMfile

从静态网格生成 PFM 文件...必须定义 UV 通道，指定范围 0...1 作为屏幕表面。原点由函数参数指定，或默认使用网格父体。

目标是 PFMExporter 蓝图 API

## 图示

![](/uploads/projects/ue-bluprint/20221218-20202166.png)

## Inputs

在。执行。

目标。PFMExporter 蓝图 API 接口。

Src 网格。静态网格组件对象参考。具有指定 UV 通道的静态网格，作为 PFM 文件的导出源。

原点。场景组件对象参考。(可选）自定义洞穴原点节点，如果没有定义，则使用 SrcMesh 父节点。

Width: 整数。输出 PFM 网格纹理宽度。

高度：整数。输出 PFM 网格纹理高度。

文件名称。字符串。输出 PFM 文件名。

## Outputs

出：执行。

返回值。布尔值。如果成功，为 true。

<hr>

Generate PFM file from static mesh.. The UV channel must be defined, assigned range 0..1 used as screen surface.. Origin assigned by function arg, or by default used mesh parent.

Target is PFMExporter Blueprint API

## 图示

![](/uploads/projects/ue-bluprint/20221218-20202166.png)

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
