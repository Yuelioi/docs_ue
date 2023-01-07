# Pipeline_1

在这一页

- 行动

## Actions

脚本可以在任何线程上执行。非虚拟辅助工具，允许蓝图实现事件基础函数，让交换器知道它是否可以异步运行。目标是 Interchange Pipeline Base。

脚本化的执行出口管道。非虚拟辅助工具，允许蓝图实现事件基础功能，让交换器知道它是否可以异步运行。目标是 Interchange Pipeline Base。

脚本化的执行导入后管道。非虚拟的辅助工具，允许蓝图实现事件基础功能，以实现导入后的管道，。它将在我们完全导入资产后被调用。PostEditChange 已经被调用。一些资产使用异步构建。如果你需要一个资产的构建数据来完成另一个资产的设置，这可能很有用。例如：物理资产（PhysicsAsset）需要骨架网格渲染数据来正确构建。注意：-互换管理器正在调用这个函数，而不是默认实现所调用的虚拟函数。目标是 Interchange Pipeline Base。

脚本化的执行预导入管道。非虚拟辅助工具，允许蓝图实现事件基础函数，以实现预导入管道。它是在翻译之后，在我们解析图形调用工厂之前调用的。这就是工厂节点应该由管道创建的地方。每个工厂节点应该被发送到一个交换工厂，以创建一个不真实的资产。注意： - 互换管理器正在调用这个函数，而不是默认实现所调用的虚拟函数。目标是 Interchange Pipeline Base。

<hr>

On this page

- Actions

## Actions

Scripted Can Execute on Any Thread. Non virtual helper to allow blueprint to implement event base function let the interchange know if it can run asynchronously.. the Interchange manager is calling this function not the virtual one that is call by the default implementation.: Target is Interchange Pipeline Base.

Scripted Execute Export Pipeline. Non virtual helper to allow blueprint to implement event base function let the interchange know if it can run asynchronously.. the Interchange manager is calling this function not the virtual one that is call by the default implementation.: Target is Interchange Pipeline Base.

Scripted Execute Post Import Pipeline. Non virtual helper to allow blueprint to implement event base function to implement a post import pipeline,. It is call after we completely import an asset. PostEditChange is already called. Some assets uses asynchronous build.. This can be useful if you need build data of an asset to finish the setup of another asset.. @example - PhysicsAsset need skeletal mesh render data to be build properly.. Note: - the Interchange manager is calling this function not the virtual one that is call by the default implementation.: Target is Interchange Pipeline Base.

Scripted Execute Pre Import Pipeline. Non virtual helper to allow blueprint to implement event base function to implement a pre import pipeline,. It is call after the translation and before we parse the graph to call the factory. This is where factory node should be created. by the pipeline. Each factory node should be send to a a interchange factory to create an unreal asset.. Note: - the Interchange manager is calling this function not the virtual one that is call by the default implementation.: Target is Interchange Pipeline Base.
