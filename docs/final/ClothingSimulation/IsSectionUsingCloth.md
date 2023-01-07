# IsSectionUsingCloth

如果 bCheckCorrespondingSections 为 true，则检查所提供的部分是否使用 APEX 布。禁用的部分将推迟到对应的部分，以查看它们是否使用布（非布的部分被禁用，当布被启用时添加另一个部分，使用这个标志允许对原始部分的检查成功。）

目标是骨架网

## 图示

![](/uploads/projects/ue-bluprint/20221218-18180533.png)

## Inputs

目标。Skeletal Mesh 对象参考。

在截面索引中。整数。要检查的索引。

检查相对应的部分。布尔值。是否检查禁用部分的对应部分。

## Outputs

返回值。布尔值。

<hr>

Checks whether the provided section is using APEX cloth. if bCheckCorrespondingSections is true. disabled sections will defer to correspond sections to see if they use cloth (non-cloth sections. are disabled and another section added when cloth is enabled, using this flag allows for a check. on the original section to succeed)

Target is Skeletal Mesh

## 图示

![](/uploads/projects/ue-bluprint/20221218-18180533.png)

## Inputs

Target: Skeletal Mesh Object Reference.

In Section Index: Integer. Index to check.

Check Corresponding Sections: Boolean. Whether to check corresponding sections for disabled sections.

## Outputs

Return Value: Boolean.
