# GetPortableBindingID

Get a portable binding ID for a binding that resides in a different sequence to the one where this binding will be resolved.. Note:: This function must be used over GetBindingID when the target binding resides in different shots or sub-sequences.. Note:: Only unique instances of sequences within a master sequences are supported

Target is Movie Scene Sequence Extensions

## 图示

![]($-20221218-20544254.png)

## Inputs

In: Exec.

Master Sequence: Movie Scene Sequence Object Reference. The master sequence that contains both the destination sequence (that will resolve the binding ID) and the target sequence that contains the actual binding.

Destination Sequence: Movie Scene Sequence Object Reference. The sequence that will own or resolve the resulting binding ID. For example, if the binding ID will be applied to a camera cut section pass the sequence that contains the camera cut track to this parameter..

In Binding: Sequencer Binding Proxy Structure (by ref).  

## Outputs

Out: Exec.

Return Value: Movie Scene Object Binding ID Structure. The binding's id.

