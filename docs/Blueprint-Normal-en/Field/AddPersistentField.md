# AddPersistentField

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

