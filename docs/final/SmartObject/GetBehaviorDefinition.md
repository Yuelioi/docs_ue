# GetBehaviorDefinition

从一个声称的对象中返回一个给定类型的行为定义。

目标是智能对象子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-20591971.png)

## Inputs

在。执行。

目标。智能对象子系统对象参考。

索赔处理。智能对象索赔手柄结构（通过引用）。给定的用户和智能对象对的句柄。如果手柄无效，将报告错误。

定义类。智能对象行为定义类参考（通过参考）。行为定义的类型...

## Outputs

出：执行。

返回值。智能对象行为定义对象参考。与 slotClaim 句柄相关的所请求的行为定义类的基类指针。

<hr>

Return the behavior definition of a given type from a claimed object.

Target is Smart Object Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-20591971.png)

## Inputs

In: Exec.

Target: Smart Object Subsystem Object Reference.

Claim Handle: Smart Object Claim Handle Structure (by ref). Handle for given pair of user and smart object. Error will be reported if the handle is invalid..

Definition Class: Smart Object Behavior Definition Class Reference (by ref). The type of behavior definition..

## Outputs

Out: Exec.

Return Value: Smart Object Behavior Definition Object Reference. The base class pointer of the requested behavior definition class associated to the slotClaim handle.
