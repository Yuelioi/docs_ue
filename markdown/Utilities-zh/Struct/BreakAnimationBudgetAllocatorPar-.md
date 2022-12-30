# BreakAnimationBudgetAllocatorPar-

Adds a node that breaks a 'AnimationBudgetAllocatorParameters' into its member fields

## 图示

![]($-20221218-14305740.png)

## Inputs

Animation Budget Allocator Parameters: Animation Budget Allocator Parameters Structure (by ref).  

## Outputs

Budget In Ms: Float (single-precision). Budget in Ms:. Values > 0.1.. The time in milliseconds that we allocate for skeletal mesh work to be performed.. When overbudget various other parameters come into play, such as AlwaysTickFalloffAggression and InterpolationFalloffAggression..

Min Quality: Float (single-precision). Min Quality:. Values [0.0, 1.0].. The minimum quality metric allowed. Quality is determined simply by NumComponentsTickingThisFrame / NumComponentsThatWeNeedToTick.. If this is anything other than 0.0 then we can potentially go over our time budget..

Max Tick Rate: Integer. Max Tick Rate:. Values >= 1.. The maximum tick rate we allow. If this is set then we can potentially go over budget, but keep quality of individual meshes to a reasonable level..

Work Unit Smoothing Speed: Float (single-precision). Work Unit Smoothing Speed:. Values > 0.1.. The speed at which the average work unit converges on the measured amount..

Always Tick Falloff Aggression: Float (single-precision). Always Tick Falloff Aggression:. Range [0.1, 0.9].. Controls the rate at which 'always ticked' components falloff under load.. Higher values mean that we reduce the number of always ticking components by a larger amount when the allocated time budget is exceeded..

Interpolation Falloff Aggression: Float (single-precision). Interpolation Falloff Aggression:. Range [0.1, 0.9].. Controls the rate at which interpolated components falloff under load.. Higher values mean that we reduce the number of interpolated components by a larger amount when the allocated time budget is exceeded.. Components are only interpolated when the time budget is exceeded..

Interpolation Max Rate: Integer. Interpolation Max Rate:. Values > 1.. Controls the rate at which ticks happen when interpolating..

Max Interpolated Components: Integer. Max Interpolated Components:. Range >= 0.. Max number of components to interpolate before we start throttling..

Interpolation Tick Multiplier: Float (single-precision). Interpolation Tick Multiplier:. Range [0.1, 0.9].. Controls the expected value an amortized interpolated tick will take compared to a 'normal' tick..

Initial Estimated Work Unit Time Ms: Float (single-precision). Initial Estimated Work Unit Time Ms:. Values > 0.0.. Controls the time in milliseconds we expect, on average, for a skeletal mesh component to execute.. The value only applies for the first tick of a component, after which we use the real time the tick takes..

Max Ticked Offsreen Components: Integer. Max Ticked Offsreen Components:. Values >= 1. The maximum number of offscreen components we tick (most significant first).

State Change Throttle In Frames: Integer. State Change Throttle in Frames:. Range [1, 128]. Prevents throttle values from changing too often due to system and load noise..

Budget Factor Before Reduced Work: Float (single-precision). Budget Factor Before Reduced Work:. Range > 1\. Reduced work will be delayed until budget pressure goes over this amount..

Budget Factor Before Reduced Work Epsilon: Float (single-precision). Budget Factor Before Reduced Work Epsilon:. Range > 0.0.. Increased work will be delayed until budget pressure goes under BudgetFactorBeforeReducedWork minus this amount..

Budget Pressure Smoothing Speed: Float (single-precision). Budget Pressure Smoothing Speed:. Range > 0.0.. How much to smooth the budget pressure value used to throttle reduced work..

Reduced Work Throttle Min In Frames: Integer. Reduced Work Throttle Min in Frames:. Range [1, 255].. Prevents reduced work from changing too often due to system and load noise. Min value used when over budget pressure (i.e. aggressive reduction)..

Reduced Work Throttle Max In Frames: Integer. Reduced Work Throttle Max in Frames:. Range [1, 255].. Prevents reduced work from changing too often due to system and load noise. Max value used when under budget pressure..

Budget Factor Before Aggressive Reduced Work: Float (single-precision). Budget Factor Before Aggressive Reduced Work:. Range > 1.. Reduced work will be applied more rapidly when budget pressure goes over this amount..

Reduced Work Throttle Max Per Frame: Integer. Reduced Work Throttle Max Per Frame:. Range [1, 255].. Controls the max number of components that are switched to/from reduced work per tick..

Budget Pressure Before Emergency Reduced Work: Float (single-precision). Budget Pressure Before Emergency Reduced Work:. Range > 0.0.. Controls the budget pressure where emergency reduced work (applied to all components except those that are bAlwaysTick)..
