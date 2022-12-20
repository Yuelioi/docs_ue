# ValidatePath

Validates that the parts that make up the path contain no invalid characters as dictated by the operating system. Note that this is a different set of restrictions to those imposed by FPackageName

Target is Blueprint Paths Library

## 图示

![]($-20221218-14283306.png)

## Inputs

In Path: String. path to validate.  

## Outputs

Did Succeed: Boolean. Whether the path could be validated.

Out Reason: Text. If validation fails, this is filled with the failure reason.

