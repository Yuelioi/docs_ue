# RequestSpeakFocusedWidget

Requests the information about the accessibility widget a user is focused on to be read out.. If nothing is currently being focused on by the screen reader user, nothing will be read out.. The same guarantees about the announcement being spoken in RequestSpeak() apply for this function.. Nothing will happen if the passed in user Id is not already registered with the screen reader.

Target is Slate Screen Reader Engine Subsystem

## 图示

![]($-20221218-20585458.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id to request its accessible focus to be read out.  

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() if the user's focused widget's information is successfully spoken. Else FScreenReaderReply::Unhandled() is returned..

