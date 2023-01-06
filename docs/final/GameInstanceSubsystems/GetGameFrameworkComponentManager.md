# GetGameFrameworkComponentManager

获取游戏框架组件管理器（GameInstance子系统）。

游戏框架组件管理器（GameFrameworkComponentManager

一个管理器，用于处理在行为体上放置组件，因为他们来来往往。提交一个请求，在给定类别的行为体上实例化给定类别的组件，当行为体被生成时，这些组件将自动为其生成。提交委托处理程序来监听给定类的行为者。当给定类别的演员或注册为接收者或游戏事件被发送时，这些处理程序将自动运行。行动者必须选择加入这种行为，当他们准备好接收组件和想要移除组件时，为自己调用AddReceiver/RemoveReceiver。当请求发出时，任何在内存中的角色将自动获得组件，而当请求被移除时，任何在内存中的角色将立即失去组件。请求是参考计数的，所以如果对同一个角色类和组件类提出了多个请求，那么只有一个组件会被添加，而这个组件在所有请求被删除之前不会被删除。

## 图示

![]($-20221218-19075847.png)

## Inputs

## Outputs

返回值。游戏框架组件管理器对象参考。

Get Game Framework Component Manager (GameInstance Subsystem)

GameFrameworkComponentManager

A manager to handle putting components on actors as they come and go.. Put in a request to instantiate components of a given class on actors of a given class and they will automatically be made for them as the actors are spawned.. Submit delegate handlers to listen for actors of a given class. Those handlers will automatically run when actors of a given class or registered as receivers or game events are sent.. Actors must opt-in to this behavior by calling AddReceiver/RemoveReceiver for themselves when they are ready to receive the components and when they want to remove them.. Any actors that are in memory when a request is made will automatically get the components, and any in memory when a request is removed will lose the components immediately.. Requests are reference counted, so if multiple requests are made for the same actor class and component class, only one component will be added and that component wont be removed until all requests are removed.

## 图示

![]($-20221218-19075847.png)

## Inputs

## Outputs

Return Value: Game Framework Component Manager Object Reference.

