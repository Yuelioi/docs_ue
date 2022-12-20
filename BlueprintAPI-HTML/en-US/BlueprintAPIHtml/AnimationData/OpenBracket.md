# OpenBracket

Opens an interaction bracket, used for combining a set of controller actions. Broadcasts a EAnimDataModelNotifyType::BracketOpened notify,. this can be used by any Views or dependendent systems to halt any unnecessary or invalid operations until the (last) bracket is closed.

Target is Animation Data Controller

## 图示

![]($-20221218-17532403.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

In Title: Text (by ref). Description of the bracket, e.g. "Generating Curve Data".

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

