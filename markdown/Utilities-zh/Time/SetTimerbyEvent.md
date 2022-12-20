# SetTimerbyEvent

Set a timer to execute delegate. Setting an existing timer will reset that timer with updated parameters.

Target is Kismet System Library

## 图示

![]($-20221218-15245684.png)

## Inputs

In: Exec.

Event: Delegate.

Time: Float (single-precision). How long to wait before executing the delegate, in seconds. Setting a timer to <= 0 seconds will clear it if it is set..

Looping: Boolean. True to keep executing the delegate every Time seconds, false to execute delegate only once..

Initial Start Delay: Float (single-precision). Initial delay passed to the timer manager, in seconds..

Initial Start Delay Variance: Float (single-precision). Use this to add some variance to when the timer starts in lieu of doing a random range on the InitialStartDelay input, in seconds..  

## Outputs

Out: Exec.

Return Value: Timer Handle Structure. The timer handle to pass to other timer functions to manipulate this timer..

