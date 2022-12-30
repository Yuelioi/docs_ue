# FindEventGraph

Finds the event graph of the given blueprint. Null if it doesn't have one. This will only return. the primary event graph of the blueprint (the graph named "EventGraph").

Target is Blueprint Editor Library

## 图示

![]($-20221218-18114030.png)

## Inputs

In: Exec.

Blueprint: Blueprint Object Reference. Blueprint to search for the event graph on.  

## Outputs

Out: Exec.

Return Value: Ed Graph Object Reference. UEdGraph* Event graph of the blueprint if it has one, null if it doesn't have one.

