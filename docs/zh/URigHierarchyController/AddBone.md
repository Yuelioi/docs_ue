# AddBone

在层次结构中添加一根骨头

目标是Rig Hierarchy控制器

## 图示

![]($-20221218-21202822.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller对象参考。

在姓名。名称。新骨头的建议名称--最终将由命名空间来纠正。

在父母。钻机元素关键结构。新骨骼的（可选）父级。如果你不需要父级，请传递FRigElementKey()。

在转型。变换。新骨骼的变换--基于bTransformInGlobal，在局部或全局空间中都可以。

Transform in Global: 布尔值。如果所传递的Transform是在全局空间中表达的，则将其设置为true；如果是在局部空间中表达的，则设置为false。

在骨类型中。ERigBoneType枚举。要添加的骨骼的类型。这可以用来区分导入的骨骼和用户定义的骨骼。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

打印Python命令。布尔值。如果设置为 "true"，相当于此调用的Python命令将被打印出来。  

## Outputs

出：执行。

返回值。Rig Element Key结构。新创建的骨骼的密钥。
