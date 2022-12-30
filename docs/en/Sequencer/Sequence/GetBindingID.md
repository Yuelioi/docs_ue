# GetBindingID

Get the binding ID for a binding within a sequence.. Note:: The resulting binding is only valid when applied to properties within the same sequence as this binding. Use GetPortableBindingID for bindings which live in different sub-sequences.

Target is Movie Scene Sequence Extensions

## 图示

![]($-20221218-20541116.png)

## Inputs

In: Exec.

In Binding: Sequencer Binding Proxy Structure (by ref).  

## Outputs

Out: Exec.

Return Value: Movie Scene Object Binding ID Structure. The binding's id.

