# DeactivateUser

Deactivates the screen reader and disables all announcement and text to speech services. making them do nothing.. If the passed in user Id does not correspond to a registered screen reader user, nothing will happen.

Target is Slate Screen Reader Engine Subsystem

## 图示

![]($-20221218-20584316.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id of the screen reader user to request deactivation. The Id should correspond to the Slate user id of an input device. If unsure, use Id 0..  

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() if the screen reader user is successfully deactivated. Else FScreenReaderReply::Unhandled() is returned..

