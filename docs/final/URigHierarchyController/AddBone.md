# AddBone

在层次结构中添加一根骨头

目标是 Rig Hierarchy 控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-21202822.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller 对象参考。

在姓名。名称。新骨头的建议名称--最终将由命名空间来纠正。

在父母。钻机元素关键结构。新骨骼的（可选）父级。如果你不需要父级，请传递 FRigElementKey()。

在转型。变换。新骨骼的变换--基于 bTransformInGlobal，在局部或全局空间中都可以。

Transform in Global: 布尔值。如果所传递的 Transform 是在全局空间中表达的，则将其设置为 true；如果是在局部空间中表达的，则设置为 false。

在骨类型中。ERigBoneType 枚举。要添加的骨骼的类型。这可以用来区分导入的骨骼和用户定义的骨骼。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

打印 Python 命令。布尔值。如果设置为 "true"，相当于此调用的 Python 命令将被打印出来。

## Outputs

出：执行。

返回值。Rig Element Key 结构。新创建的骨骼的密钥。

<hr>

Adds a bone to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-21202822.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Name: Name. The suggested name of the new bone - will eventually be corrected by the namespace.

In Parent: Rig Element Key Structure. The (optional) parent of the new bone. If you don't need a parent, pass FRigElementKey().

In Transform: Transform. The transform for the new bone - either in local or global space, based on bTransformInGlobal.

Transform in Global: Boolean. Set this to true if the Transform passed is expressed in global space, false for local space..

In Bone Type: ERigBoneType Enum. The type of bone to add. This can be used to differentiate between imported bones and user defined bones..

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean. If set to true a python command equivalent to this call will be printed out.

## Outputs

Out: Exec.

Return Value: Rig Element Key Structure. The key for the newly created bone..
