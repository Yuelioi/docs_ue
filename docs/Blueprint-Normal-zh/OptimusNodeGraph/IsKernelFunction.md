# IsKernelFunction

如果该节点是一个内核函数节点，可以通过ConvertFunctionToCustomKernel转换为自定义内核，则返回true。

目标是Optimus节点图

## 图示

![]($-20221218-20172821.png)

## Inputs

目标。Optimus节点图对象参考。

在节点中。Optimus节点对象参考。  

## Outputs

返回值。布尔值。如果该节点是一个内核函数节点，可以用ConvertFunctionToCustomKernel.转换为自定义内核，则返回true。
