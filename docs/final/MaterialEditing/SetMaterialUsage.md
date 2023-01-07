# SetMaterialUsage

为所提供的材料启用一个特定的用法（例如：SkeletalMesh、ParticleSprite 等）。

目标是材料编辑库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19465838.png)

## Inputs

在。执行。

材料。材料对象参考。要改变用途的材料。

使用方法。EMaterialUsage 枚举。为该材料启用的新使用类型。

## Outputs

出：执行。

需要重新编译。布尔值。返回表示材料在此变化后是否需要重新编译。

返回值。布尔值。

<hr>

Enable a particular usage for the supplied material (e.g. SkeletalMesh, ParticleSprite etc)

Target is Material Editing Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19465838.png)

## Inputs

In: Exec.

Material: Material Object Reference. Material to change usage for.

Usage: EMaterialUsage Enum. New usage type to enable for this material.

## Outputs

Out: Exec.

Needs Recompile: Boolean. Returned to indicate if material needs recompiling after this change.

Return Value: Boolean.
