# AddPersistentField

AddPersistentField。这个函数将调度一个命令给物理线程来应用，是对用户定义的场网的通用评估。这个命令在时间上将是持久的，并将一直存在，直到组件被销毁或RemovePersistenFields函数被调用。关于如何使用场网络重新创建上述通用场的变体的例子，请参见文件，。

(https://wiki.it.epicgames.net/display/~Brice.Criswell/Fields)

目标是现场系统组件

## 图示

![]($-20221218-18593975.png)

## Inputs

在。执行。

目标。现场系统组件对象参考。

启用字段。布尔型。是否为评估而启用该力量...

物理学类型。EFieldPhysicsType枚举。解算器支持的场的类型。

元数据。现场系统元数据对象参考。用于协助评估的元数据。

字段节点。现场节点基础对象参考。现场网络的基本评估节点。  

## Outputs

出：执行。

AddPersistentField. This function will dispatch a command to the physics thread to apply. a generic evaluation of a user defined field network. This command will be persistent in time and will live until. the component is destroyed or until the RemovePersistenFields function is called. See documentation,. for examples of how to recreate variations of the above generic. fields using field networks

(https://wiki.it.epicgames.net/display/~Brice.Criswell/Fields)

Target is Field System Component

## 图示

![]($-20221218-18593975.png)

## Inputs

In: Exec.

Target: Field System Component Object Reference.

Enable Field: Boolean. Is this force enabled for evaluation..

Physics Type: EFieldPhysicsType Enum. Type of field supported by the solver..

Meta Data: Field System Meta Data Object Reference. Meta data used to assist in evaluation.

Field Node: Field Node Base Object Reference. Base evaluation node for the field network..  

## Outputs

Out: Exec.

