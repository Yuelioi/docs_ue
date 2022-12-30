# ActivateUser

Activates a screen reader user and fulfill requests for accessibility services such as text to speech that clients can make.. When screen reader users are first registered with a screen reader, they are deactivated by default. Users must explicitly activate the screen reader user.. If the passed in user Id does not correspond to a registered screen reader user, nothing will happen.

Target is Slate Screen Reader Engine Subsystem

## 图示

![]($-20221218-20584089.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id of the screen reader user to request activation.  

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() if the screen reader user is successfully activated. Else FScreenReaderReply::Unhandled() is returned..

