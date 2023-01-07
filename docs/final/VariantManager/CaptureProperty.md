# CaptureProperty

在 Variant 中找到与 Actor 绑定的 actor，并尝试用 PropertyPath 捕获一个属性。如果成功，返回捕获的 UPropertyValue，如果失败，返回 nullptr。

目标是变体管理器蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-21234318.png)

## Inputs

在。执行。

变体。变体对象参考。

演员。Actor Object Reference.

属性路径。字符串。

## Outputs

出：执行。

返回值。属性值对象参考。在 Variant 中找到与 Actor 绑定的 actor，并尝试用 PropertyPath 捕捉一个属性。如果成功，返回捕获的 UPropertyValue，如果失败，返回 nullptr。

<hr>

Finds the actor binding to Actor within Variant and tries capturing a property with PropertyPath. Returns the captured UPropertyValue if succeeded or nullptr if it failed.

Target is Variant Manager Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21234318.png)

## Inputs

In: Exec.

Variant: Variant Object Reference.

Actor: Actor Object Reference.

Property Path: String.

## Outputs

Out: Exec.

Return Value: Property Value Object Reference. Finds the actor binding to Actor within Variant and tries capturing a property with PropertyPath. Returns the captured UPropertyValue if succeeded or nullptr if it failed..
