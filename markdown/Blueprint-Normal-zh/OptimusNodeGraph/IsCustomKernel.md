# IsCustomKernel

如果该节点是一个自定义的内核节点，可以通过ConvertCustomKernelToFunction转换为一个内核函数，则返回true。

目标是Optimus节点图

## 图示

![]($-20221218-20172349.png)

## Inputs

目标。Optimus节点图对象参考。

在节点中。Optimus节点对象参考。  

## Outputs

返回值。布尔值。如果该节点是一个自定义的内核节点，可以用ConvertCustomKernelToFunction.转换为一个内核函数，则返回true。
