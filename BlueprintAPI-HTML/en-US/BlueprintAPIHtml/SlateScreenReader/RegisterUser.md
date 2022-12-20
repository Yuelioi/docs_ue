# RegisterUser

Registers a provided user Id to the screen reader framework and allows the screen reader user to receive and respond to accessible events and accessible input.. Does nothing if the passed in Id is already registered.. Note: A successfully registered screen reader user is deactivated by default and will not respond to accessible events or accessible input.. You need to call ActivateUser() to allow the newly registered screen reader user to respond to the accessible events and accessible input.

Target is Slate Screen Reader Engine Subsystem

## 图示

![]($-20221218-20585228.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id of the screen reader user to register. The Id should correspond to a valid Slate user Id for an active hardware input device. If unsure, use Id 0..  

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() if the screen reader user is successfully registered. Else FScreenReaderReply::Unhandled() is returned. See: ActivateUser().

