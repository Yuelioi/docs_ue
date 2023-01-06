# CopyMetaData

将指定的元数据复制到这个级别序列中，覆盖任何现有的相同类型的元数据。元数据可以实现ILevelSequenceMetaData接口，以便与默认的ULevelSequence功能挂钩。

目标是水平序列

## 图示

![]($-20221218-19410400.png)

## Inputs

在。执行。

目标。水平序列对象参考。

在元数据中。对象参考。现有的元数据对象，你想复制到这个级别序列中。  

## Outputs

出：执行。

返回值。对象参考。新复制的Metadata实例，现在存在于这个序列上。

Copy the specified meta data into this level sequence, overwriting any existing meta-data of the same type. Meta-data may implement the ILevelSequenceMetaData interface in order to hook into default ULevelSequence functionality.

Target is Level Sequence

## 图示

![]($-20221218-19410400.png)

## Inputs

In: Exec.

Target: Level Sequence Object Reference.

In Meta Data: Object Reference. Existing Metadata Object that you wish to copy into this Level Sequence..  

## Outputs

Out: Exec.

Return Value: Object Reference. The newly copied instance of the Metadata that now exists on this sequence..

