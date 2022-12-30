# CreateNewGroomBindingAsset

在项目的内容空间中创建一个新的新郎绑定资产。资产名称将根据新郎资产名称和骨架资产名称自动生成。

目标是新郎蓝图库

## 图示

![]($-20221218-19155144.png)

## Inputs

在。执行。

在Groom资产：Groom资产对象参考。用于绑定的新郎资产。

在Skeletal Mesh中。Skeletal Mesh Object Reference。新郎应该被绑定的骨架网。

在Num Interpolation Points:整数。(可选）用于RBF约束的点的数量。

在转移的源骨架网格中。骨架网格对象参考。(可选）新郎所使用的骨架网。只有在新郎所在的骨骼网与新郎的其他姿势不一致的情况下才可以使用。

在匹配部分。整数。  

## Outputs

出：执行。

返回值。Groom Binding Asset Object Reference。
