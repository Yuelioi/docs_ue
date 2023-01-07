# GetAttributeValue

检索一个属性的值。如果该属性不存在，将失败并返回 0。

目标是 DMX 灯具补丁

## 图示

![](/uploads/projects/ue-bluprint/20221218-18433915.png)

## Inputs

在。执行。

目标。DMX 灯具补丁对象参考。

属性。DMXAttribute Name 结构。试图获得该值的属性。

## Outputs

出：执行。

成功。布尔值。是否在此灯具补丁中找到该属性。

返回值。整数。映射到所选属性的函数的值，如果找到的话。

<hr>

Retrieves the value of an Attribute. Will fail and return 0 if the Attribute doesn't exist.

Target is DMX Fixture Patch

## 图示

![](/uploads/projects/ue-bluprint/20221218-18433915.png)

## Inputs

In: Exec.

Target: DMX Fixture Patch Object Reference.

Attribute: DMXAttribute Name Structure. The Attribute to try to get the value from..

## Outputs

Out: Exec.

Success: Boolean. Whether the Attribute was found in this Fixture Patch.

Return Value: Integer. The value of the Function mapped to the selected Attribute, if found..
