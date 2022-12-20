# UpdateState

This function checks if the requisite conditions have been met for the trigger to fire.. Returns Trigger State None - No trigger conditions have been met. Trigger is inactive.. Trigger State Ongoing - Some trigger conditions have been met. Trigger is processing but not yet active.. Trigger State Triggered - All trigger conditions have been met to fire. Trigger is active.

Target is Input Trigger

## 图示

![]($-20221218-21155758.png)

## Inputs

In: Exec.

Target: Input Trigger Object Reference.

Player Input: Enhanced Player Input Object Reference.

Modified Value: Input Action Value Structure.

Delta Time: Float (single-precision).  

## Outputs

Out: Exec.

Return Value: ETriggerState Enum. This function checks if the requisite conditions have been met for the trigger to fire.. Returns Trigger State None - No trigger conditions have been met. Trigger is inactive.. Trigger State Ongoing - Some trigger conditions have been met. Trigger is processing but not yet active.. Trigger State Triggered - All trigger conditions have been met to fire. Trigger is active..

