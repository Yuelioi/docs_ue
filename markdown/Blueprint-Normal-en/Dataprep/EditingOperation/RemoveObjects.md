# RemoveObjects

Remove an array of objects from the Dataprep's and/or action's working set

Target is Dataprep Editing Operation

## 图示

![]($-20221218-18354018.png)

## Inputs

In: Exec.

Target: Dataprep Editing Operation Object Reference.

Objects: Array of Object References. An array of objects to be removed from the working set.

Local Context: Boolean. If set to true, the object is removed from the current working set. The object will not be accessible to any subsequent operation using the current context. If set to false, the object is removed from the Dataprep's working set. The object will not be accessible to any subsequent operation in the Dataprep's pipeline..  

## Outputs

Out: Exec.

