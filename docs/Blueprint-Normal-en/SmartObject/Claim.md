# Claim

Claim smart object from a valid request result.

Target is Smart Object Subsystem

## 图示

![]($-20221218-20591637.png)

## Inputs

In: Exec.

Target: Smart Object Subsystem Object Reference.

Request Result: Smart Object Request Result Structure (by ref). Valid request result for given smart object and slot index. Ensure when called with an invalid result..  

## Outputs

Out: Exec.

Return Value: Smart Object Claim Handle Structure. A claim handle binding the claimed smart object, its use index and a user id..

