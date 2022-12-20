# ConvertFunctiontoCustomKernel

Takes a kernel function and unpackages to a custom kernel. If the given node is not a. kernel function or cannot be converted, a nullptr is returned.

Target is Optimus Node Graph

## 图示

![]($-20221218-20171054.png)

## Inputs

In: Exec.

Target: Optimus Node Graph Object Reference.

In Kernel Function: Optimus Node Object Reference.  

## Outputs

Out: Exec.

Return Value: Optimus Node Object Reference. Takes a kernel function and unpackages to a custom kernel. If the given node is not a. kernel function or cannot be converted, a nullptr is returned..

