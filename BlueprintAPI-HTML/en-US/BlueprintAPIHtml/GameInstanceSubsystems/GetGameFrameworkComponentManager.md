# GetGameFrameworkComponentManager

Get Game Framework Component Manager (GameInstance Subsystem)

GameFrameworkComponentManager

A manager to handle putting components on actors as they come and go.. Put in a request to instantiate components of a given class on actors of a given class and they will automatically be made for them as the actors are spawned.. Submit delegate handlers to listen for actors of a given class. Those handlers will automatically run when actors of a given class or registered as receivers or game events are sent.. Actors must opt-in to this behavior by calling AddReceiver/RemoveReceiver for themselves when they are ready to receive the components and when they want to remove them.. Any actors that are in memory when a request is made will automatically get the components, and any in memory when a request is removed will lose the components immediately.. Requests are reference counted, so if multiple requests are made for the same actor class and component class, only one component will be added and that component wont be removed until all requests are removed.

## 图示

![]($-20221218-19075847.png)

## Inputs

## Outputs

Return Value: Game Framework Component Manager Object Reference.

