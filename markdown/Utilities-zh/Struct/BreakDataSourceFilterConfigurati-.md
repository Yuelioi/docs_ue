# BreakDataSourceFilterConfigurati-

添加一个节点，将'DataSourceFilterConfiguration'分解成其成员字段

## 图示

![]($-20221218-14334595.png)

## Inputs

数据源过滤器配置。数据源过滤器配置结构（通过引用）。 

## Outputs

Only Apply During Actor Spawn: 布尔值。Only Apply During Actor Spawn:（仅在演员再生时应用）。标志着这个过滤器是否应该只应用一次，每当一个角色被生出时。

可以异步运行。布尔值。可以异步运行：。标记该过滤器是否不依赖于游戏线程的数据，因此可以在不同的线程上工作。

Filter Applying Tick Interval（过滤器应用时间间隔）。字节。过滤器应用Tick间隔：。应用过滤器的时间间隔，以帧为单位。产生的值被缓存在中间帧中。
