# CompareImageAgainstReference

request image comparison.

Target is Automation Blueprint Function Library

## 图示

![]($-20221218-18093558.png)

## Inputs

In: Exec.

Image File Path: String. Absolute path to the image location. All 8bit RGBA channels supported formats by the engine are accepted..

Comparison Name: String. Optional name for the comparison, by default the basename of ImageFilePath is used.

Comparison Tolerance: EComparisonTolerance Enum.

Comparison Notes: String.  

## Outputs

Out: Exec.

Return Value: Boolean. True if comparison was successfully enqueued.

