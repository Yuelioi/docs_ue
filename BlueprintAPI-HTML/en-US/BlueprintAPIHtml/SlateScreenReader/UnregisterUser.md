# UnregisterUser

Unregisters a provided user Id from the screen reader framework and deactivates the user. The unregistered user will no longer receive or respond to accessible events and input.. Nothing will happen if the provided user Id has not been registered with the screen reader.

Target is Slate Screen Reader Engine Subsystem

## 图示

![]($-20221218-20590037.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id to unregister from the screen reader framework..  

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() if the screen reader user is successfully unregistered. Else FScreenReaderReply::Unhandled() is returned..

