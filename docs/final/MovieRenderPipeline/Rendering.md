# Rendering

在这一页

  * 行动





## Actions

是否正在渲染。如果有一个活动的执行者正在制作电影，则返回true。这可能是正在渲染帧，或正在进行后期处理（最终完成文件写入等）。使用GetActiveExecutor()并直接查询它，以获得更多信息、进度更新等：目标是电影管道队列引擎子系统。

用执行器渲染队列。用提供的执行器类开始处理当前队列。这将启动一个异步进程，该进程可能在一个单独的进程中运行（或在不同的机器上），由执行器的实现决定。执行器应该报告工作的进度，这取决于执行方式。目标是电影管道队列引擎子系统。

Render Queue with Executor Instance。用提供的执行器开始处理当前队列。这将启动一个异步进程，该进程可能在一个单独的进程中运行（或在不同的机器上），由执行器的实现决定。执行器应该报告工作的进度，这取决于执行方式。目标是电影管道队列引擎子系统。

On this page 

  * Actions





## Actions

Is Rendering. Returns true if there is an active executor working on producing a movie. This could be actively rendering frames,. or working on post processing (finalizing file writes, etc.). Use GetActiveExecutor() and query it directly for. more information, progress updates, etc.: Target is Movie Pipeline Queue Engine Subsystem.

Render Queue with Executor. Starts processing the current queue with the supplied executor class. This starts an async process which. may or may not run in a separate process (or on separate machines), determined by the executor implementation.. The executor should report progress for jobs depending on the implementation.: Target is Movie Pipeline Queue Engine Subsystem.

Render Queue with Executor Instance. Starts processing the current queue with the supplied executor. This starts an async process which. may or may not run in a separate process (or on separate machines), determined by the executor implementation.. The executor should report progress for jobs depending on the implementation.: Target is Movie Pipeline Queue Engine Subsystem.

