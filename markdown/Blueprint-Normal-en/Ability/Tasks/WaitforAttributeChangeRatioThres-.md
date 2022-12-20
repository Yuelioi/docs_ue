# WaitforAttributeChangeRatioThres-

Wait on attribute ratio change meeting a comparison threshold.

Target is Ability Task Wait Attribute Change Ratio Threshold

## 图示

![]($-20221218-17332849.png)

## Inputs

In: Exec.

Attribute Numerator: Gameplay Attribute Structure.

Attribute Denominator: Gameplay Attribute Structure.

Comparison Type: EWaitAttributeChangeComparison Enum.

Comparison Value: Float (single-precision).

Trigger Once: Boolean.

Optional External Owner: Actor Object Reference.  

## Outputs

Out: Exec.

Async Task: Ability Task Wait Attribute Change Ratio Threshold Object Reference.

On Change: Exec. On Change.

Matches Comparison: Boolean.

Current Ratio: Float (single-precision).

