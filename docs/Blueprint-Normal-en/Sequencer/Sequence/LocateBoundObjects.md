# LocateBoundObjects

Locate all the objects that correspond to the specified object ID, using the specified context

Target is Movie Scene Sequence Extensions

## 图示

![]($-20221218-20550180.png)

## Inputs

In: Exec.

Sequence: Movie Scene Sequence Object Reference. The sequence to locate bound objects for.

In Binding: Sequencer Binding Proxy Structure (by ref). The object binding.

Context: Object Reference. Optional context to use to find the required object.  

## Outputs

Out: Exec.

Return Value: Array of Object References. An array of all bound objects.

