# SetTargetContentFolderAutomated

Sets the path of the package the consumer should move assets to if applicable.. This version won't pop any ui. Generally, this package path is substituted to the temporary path the assets are in

Target is Dataprep Content Consumer

## 图示

![]($-20221218-18361733.png)

## Inputs

In: Exec.

Target: Dataprep Content Consumer Object Reference.

In Target Content Folder: String. : Path of the package to save any assets in.  

## Outputs

Out: Exec.

Out Failure Reason: Text. : String explaining reason of failure to set the target content folder.

Return Value: Boolean. true if the assignment has been successful, false otherwise.

