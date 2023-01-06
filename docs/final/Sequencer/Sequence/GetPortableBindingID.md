# GetPortableBindingID

获取一个可移植的绑定ID，该绑定驻留在一个与该绑定将被解析的不同序列中。注意：:当目标绑定驻留在不同的镜头或子序列中时，这个函数必须在GetBindingID之上使用。注意：。只支持主序列中唯一的序列实例。

目标是电影场景序列扩展

## 图示

![]($-20221218-20544254.png)

## Inputs

在。执行。

主序列。电影场景序列对象参考。包含目标序列（将解决绑定ID）和包含实际绑定的目标序列的主序列。

目的地序列。电影场景序列对象参考。将拥有或解决结果绑定ID的序列。例如，如果绑定的ID将被应用于摄像机剪切部分，则将包含摄像机剪切轨道的序列传递给这个参数。

绑定中。定序器绑定代理结构（由参考）。  

## Outputs

出：执行。

返回值。电影场景对象的绑定ID结构。绑定的ID。

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

