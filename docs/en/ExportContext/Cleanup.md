# Cleanup

Discards the currently opened stage. This is critical when using this class via scripting: The C++ destructor will. not be called when the python object runs out of scope, so we would otherwise keep a strong reference to the stage

Target is Usd Conversion Blueprint Context

## 图示

![]($-20221218-18592706.png)

## Inputs

In: Exec.

Target: Usd Conversion Blueprint Context Object Reference.  

## Outputs

Out: Exec.

