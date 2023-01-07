# IsValidRename

如果给定的新文本是重命名子对象的有效选项，返回真。如果无效，则弹出 OutErrorMessage。

目标是子对象数据子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21055871.png)

## Inputs

目标。子对象数据子系统对象参考。

手柄。子对象数据手柄结构（通过引用）。正在被检查的子对象的句柄。

在新文本中。文本（按参考）。希望的新名称。

## Outputs

出错信息。文本。无效名称的理由。

返回值。布尔值。如果重命名是有效的，则为真。

<hr>

Returns true if the given new text is a valid option to rename the. subobject with the given handle. Populates the OutErrorMessage if. it is not valid.

Target is Subobject Data Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21055871.png)

## Inputs

Target: Subobject Data Subsystem Object Reference.

Handle: Subobject Data Handle Structure (by ref). Handle to the subobject that is being checked.

In New Text: Text (by ref). The new name that is desired.

## Outputs

Out Error Message: Text. The reasoning for an invalid name.

Return Value: Boolean. True if the rename is valid.
