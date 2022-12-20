# StopSpeaking

Immediately stops speaking any currently spoken announcement for a particular screen reader user.. Does nothing if there is no announcement currently being spoken for the user or if the user Id is not registered with the screen reader.

Target is Slate Screen Reader Engine Subsystem

## 图示

![]($-20221218-20585803.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id of the screen reader user to request announcements to be stopped..  

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReader::Handled() if the request to stop speaking is successfully processed. Else FScreenReaderReply::Unhandled() is returned..

