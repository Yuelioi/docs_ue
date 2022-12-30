# OpenEditorforAssets

Tries to open an editor for all of the specified assets.. If any of the assets are already open, it will not create a new editor for them.. If all assets are of the same type, the supporting AssetTypeAction (if it exists) is responsible for the details of how to handle opening multiple assets at once.

Target is Asset Editor Subsystem

## 图示

![]($-20221218-18481075.png)

## Inputs

In: Exec.

Target: Asset Editor Subsystem Object Reference.

Assets: Array of Object References.  

## Outputs

Out: Exec.

Return Value: Boolean. Tries to open an editor for all of the specified assets.. If any of the assets are already open, it will not create a new editor for them.. If all assets are of the same type, the supporting AssetTypeAction (if it exists) is responsible for the details of how to handle opening multiple assets at once..

