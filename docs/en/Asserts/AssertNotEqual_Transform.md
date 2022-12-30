# AssertNotEqual_Transform

Assert that two transforms are (components memberwise - translation, rotation, scale) not equal within a small tolerance.

Target is Functional Test

## 图示

![]($-20221218-17593159.png)

## Inputs

In: Exec.

Target: Functional Test Object Reference.

Actual: Transform (by ref).

Not Expected: Transform (by ref).

What: String. A name to use in the message if the assert fails ("Expected 'What' not to be {Expected} but it was {Actual} for context ''").  

## Outputs

Out: Exec.

Return Value: Boolean.

