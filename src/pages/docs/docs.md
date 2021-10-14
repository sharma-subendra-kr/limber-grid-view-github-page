## Classes

<dl>
<dt><a href="#LimberGridView">LimberGridView</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#options">options</a> : <code>object</code></dt>
<dd><p>Parameters to constructor function</p>
</dd>
<dt><a href="#gridData">gridData</a> : <code>options~gridData</code></dt>
<dd><p>Warning: Keys here to be set only once during the application development lifecycle. Changes later on are dangerous and will result in unwanted behaviour. Output from function getGridData are scaled as per the dimensions defined here. If custom values are used then they should be passed everytime a new instance is created.</p>
</dd>
<dt><a href="#positionData">positionData</a> : <code>Array.&lt;options~positionData&gt;</code></dt>
<dd><p>Array of Position Data of the items on grid. These are scaled during the runtime. Use getGridData function to get data to store on the database which is scaled accorging to gridData.</p>
</dd>
<dt><a href="#callbacks">callbacks</a> : <code>options~callbacks</code></dt>
<dd><p>Object containing all the callbacks</p>
</dd>
<dt><a href="#publicConstants">publicConstants</a> : <code>options~publicConstants</code></dt>
<dd><p>Constants which you can change or set at any point of time to get the desired behaviour.</p>
</dd>
</dl>

<a name="LimberGridView"></a>

## LimberGridView
**Kind**: global class  

* [LimberGridView](#LimberGridView)
    * [new LimberGridView(options)](#new_LimberGridView_new)
    * [.renderItem(index)](#LimberGridView+renderItem)
    * [.getGridData()](#LimberGridView+getGridData) ⇒ <code>object</code>
    * [.setDeskInteractMode(flag)](#LimberGridView+setDeskInteractMode)
    * [.setLatchMovedItem(flag)](#LimberGridView+setLatchMovedItem)
    * [.setShrinkToFit(Value)](#LimberGridView+setShrinkToFit)
    * [.addItem(item)](#LimberGridView+addItem)
    * [.removeItem(index)](#LimberGridView+removeItem)
    * [.setIsMobileCheck(f)](#LimberGridView+setIsMobileCheck)
    * [.undo()](#LimberGridView+undo)
    * [.redo()](#LimberGridView+redo)
    * [.isUndoAvailable()](#LimberGridView+isUndoAvailable)
    * [.isRedoAvailable()](#LimberGridView+isRedoAvailable)
    * [.setAutoScrollDelay()](#LimberGridView+setAutoScrollDelay)
    * [.setAutoScrollForMouse()](#LimberGridView+setAutoScrollForMouse)
    * [.destroy()](#LimberGridView+destroy)

<a name="new_LimberGridView_new"></a>

### new LimberGridView(options)

| Param | Type |
| --- | --- |
| options | [<code>options</code>](#options) | 

<a name="LimberGridView+renderItem"></a>

### limberGridView.renderItem(index)
Call this function to forcefully re-render the contents of the item. Internally calls renderContent. Must be called inside resizeComplete

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of item to force re-render. |

<a name="LimberGridView+getGridData"></a>

### limberGridView.getGridData() ⇒ <code>object</code>
Call this function to get positionData scaled according to gridData.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  
**Returns**: <code>object</code> - Object containing gridData and positionData.  
<a name="LimberGridView+setDeskInteractMode"></a>

### limberGridView.setDeskInteractMode(flag)
Call this function to change DESK_INTERACTION_MODE during runtime.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| flag | <code>string</code> | String "ADD" or "CUTSPACE" |

<a name="LimberGridView+setLatchMovedItem"></a>

### limberGridView.setLatchMovedItem(flag)
Call this function to change LATCH_MOVED_ITEM during runtime.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| flag | <code>boolean</code> | Boolean true or false. To latch or not to latch. |

<a name="LimberGridView+setShrinkToFit"></a>

### limberGridView.setShrinkToFit(Value)
Call this function to change SHRINK_TO_FIT during runtime.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| Value | <code>number</code> | indicates up to a certain percentage an item can be shrinked. Specify 0 if no shrink is desired. |

<a name="LimberGridView+addItem"></a>

### limberGridView.addItem(item)
Call this function to add an item.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | Object with optional properties width and height. |

<a name="LimberGridView+removeItem"></a>

### limberGridView.removeItem(index)
Call this function to remove an item with the index.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of the item to be removed. |

<a name="LimberGridView+setIsMobileCheck"></a>

### limberGridView.setIsMobileCheck(f)
Set isMobileCheck callback function during runtime

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| f | <code>isMobileCheck</code> | isMobileCheck callback to check if the screen is a mobile device screen. |

<a name="LimberGridView+undo"></a>

### limberGridView.undo()
undo previous move or drag

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  
<a name="LimberGridView+redo"></a>

### limberGridView.redo()
redo move or drag

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  
<a name="LimberGridView+isUndoAvailable"></a>

### limberGridView.isUndoAvailable()
returns true if undo is possible

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  
<a name="LimberGridView+isRedoAvailable"></a>

### limberGridView.isRedoAvailable()
returns true if redo is possible

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  
<a name="LimberGridView+setAutoScrollDelay"></a>

### limberGridView.setAutoScrollDelay()
set auto scroll delay for resize, move, add, cut in milliseconds

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  
<a name="LimberGridView+setAutoScrollForMouse"></a>

### limberGridView.setAutoScrollForMouse()
set auto scroll for resize, move, add, cut

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  
<a name="LimberGridView+destroy"></a>

### limberGridView.destroy()
free event listeners and all other resources

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  
<a name="options"></a>

## options : <code>object</code>
Parameters to constructor function

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| el | <code>string</code> \| <code>object</code> | id of the container or element object |
| editable | <code>boolean</code> | If enabled user can resize, move, cut space, interactivelu add on the desk. Default is true. |
| enableInteractiveAddAndCut | <code>boolean</code> | If enabled user can add and cut space on the desk. Default is true. |
| enableTouchInteraction | <code>boolean</code> | If enabled user can use touch interaction on items on desk and on the desk. Default is true. |
| autoArrange | <code>boolean</code> | If enabled first render is autoarranged. Autoarrange also happens when a faulty data is received during window resize. |
| reRenderOnResize | <code>boolean</code> | If enabled rerender on window resize. Passing false is dangerous. Default is true. |
| isMobileCheck | [<code>isMobileCheck</code>](#options..isMobileCheck) | A callback that returns a boolean which tells that the screen is or is not a mobile screen |
| pseudoElementContainer | <code>string</code> \| <code>object</code> | The id of the element or the element where the pseudo elements are rendered that appear during moving. |
| itemMouseDownMoveCheck | [<code>itemMouseDownMoveCheck</code>](#options..itemMouseDownMoveCheck) | A callback function to tell whether the mouse down event has occured at a desired location on the item for move event. |
| itemMouseDownResizeCheck | [<code>itemMouseDownResizeCheck</code>](#options..itemMouseDownResizeCheck) | A callback function to tell whether the mouse down event has occured at a desired location on the item for resize event. |
| gridData | [<code>gridData</code>](#gridData) | Warning: Keys here to be set only once during the application development lifecycle. Changes later on are dangerous and will result in unwanted behaviour. Output from function getGridData are scaled as per the dimensions defined here. If custom values are used then they should be passed everytime a new instance is created. |
| positionData | [<code>positionData</code>](#positionData) | input position data of items to render. |
| callbacks | [<code>callbacks</code>](#callbacks) | An object containing various callbacks. |
| publicConstants | [<code>publicConstants</code>](#publicConstants) | Constants which you can change or set at any point of time to get the desired behaviour. |


* [options](#options) : <code>object</code>
    * [~isMobileCheck](#options..isMobileCheck) ⇒ <code>boolean</code>
    * [~itemMouseDownMoveCheck](#options..itemMouseDownMoveCheck) ⇒ <code>boolean</code>
    * [~itemMouseDownResizeCheck](#options..itemMouseDownResizeCheck) ⇒ <code>boolean</code>

<a name="options..isMobileCheck"></a>

### options~isMobileCheck ⇒ <code>boolean</code>
**Kind**: inner typedef of [<code>options</code>](#options)  
**Returns**: <code>boolean</code> - Returns true if the screen matches media queries for a mobile screen.  
<a name="options..itemMouseDownMoveCheck"></a>

### options~itemMouseDownMoveCheck ⇒ <code>boolean</code>
**Kind**: inner typedef of [<code>options</code>](#options)  
**Returns**: <code>boolean</code> - Returns true if the mouse down happened at a desired location on the item for move event.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | point along the x axis axis where the mouse down happened on the item |
| y | <code>Number</code> | point along the y axis axis where the mouse down happened on the item |
| positionData | <code>object</code> | object for the item. |
| index | <code>number</code> | Index of the item in positionData array. |
| target | <code>object</code> | target element where the mouse down happened. |

<a name="options..itemMouseDownResizeCheck"></a>

### options~itemMouseDownResizeCheck ⇒ <code>boolean</code>
**Kind**: inner typedef of [<code>options</code>](#options)  
**Returns**: <code>boolean</code> - Returns true if the mouse down happened at a desired location on the item for resize event.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | point along the x axis axis where the mouse down happened on the item |
| y | <code>Number</code> | point along the y axis axis where the mouse down happened on the item |
| positionData | <code>object</code> | object for the item. |
| index | <code>number</code> | Index of the item in positionData array. |
| target | <code>object</code> | target element where the mouse down happened. |

<a name="gridData"></a>

## gridData : <code>options~gridData</code>
Warning: Keys here to be set only once during the application development lifecycle. Changes later on are dangerous and will result in unwanted behaviour. Output from function getGridData are scaled as per the dimensions defined here. If custom values are used then they should be passed everytime a new instance is created.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| WIDTH | <code>number</code> | Width of the Grid. It is scaled internally as per the device size for visual consistency. Default value is 1920. |
| HEIGHT | <code>number</code> | Height of the Grid. It is scaled internally as per the device size for visual consistency. Default value is 1080. |
| MARGIN | <code>number</code> | Margin or the items maintained by Arrange Engine. It is scaled internally as per the device size for visual consistency. Default value is 8. |
| MIN_HEIGHT_AND_WIDTH | <code>number</code> | Min height and width of the items. It is scaled internally as per the device size for visual consistency. A lower number affects the performance of the arrange algorithm. Default value is 150. |

<a name="positionData"></a>

## positionData : <code>Array.&lt;options~positionData&gt;</code>
Array of Position Data of the items on grid. These are scaled during the runtime. Use getGridData function to get data to store on the database which is scaled accorging to gridData.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | positon of item along the x axis. |
| y | <code>number</code> | positon of item along the y axis. |
| width | <code>number</code> | Width of the item. |
| height | <code>number</code> | Height of the item. |

<a name="callbacks"></a>

## callbacks : <code>options~callbacks</code>
Object containing all the callbacks

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| callback | [<code>renderComplete</code>](#callbacks..renderComplete) | Callback function called after rendering of all the items or a single item are complete. This is not called after re-rendering of items whose indices are affected due to removal of any item. |
| callback | [<code>renderContent</code>](#callbacks..renderContent) | Callback function called to get the contents to attach to the item as children. |
| callback | [<code>addComplete</code>](#callbacks..addComplete) | Callback function called when addition of an item is complete. |
| callback | [<code>removeComplete</code>](#callbacks..removeComplete) | Callback function called when removing of item is complete. |
| callback | [<code>moveComplete</code>](#callbacks..moveComplete) | Callback function called when moving of item is complete. |
| callback | [<code>resizeComplete</code>](#callbacks..resizeComplete) | Callback function called when resizing of item is complete. |
| callback | [<code>renderPlugin</code>](#callbacks..renderPlugin) | Callback function called after renderContent and before renderComplete and addComplete but after removeComplete  for items to be rerender after a removeal of an item. |
| callback | [<code>removePlugin</code>](#callbacks..removePlugin) | Callback function called before the item is removed from the DOM. Also before removeComplete. |


* [callbacks](#callbacks) : <code>options~callbacks</code>
    * [~renderComplete](#callbacks..renderComplete) : <code>function</code>
    * [~renderContent](#callbacks..renderContent) ⇒ <code>string</code> \| <code>Element</code> \| <code>object</code>
    * [~addComplete](#callbacks..addComplete) : <code>function</code>
    * [~removeComplete](#callbacks..removeComplete) : <code>function</code>
    * [~moveComplete](#callbacks..moveComplete) : <code>function</code>
    * [~resizeComplete](#callbacks..resizeComplete) : <code>function</code>
    * [~renderPlugin](#callbacks..renderPlugin) : <code>function</code>
    * [~removePlugin](#callbacks..removePlugin) : <code>function</code>

<a name="callbacks..renderComplete"></a>

### callbacks~renderComplete : <code>function</code>
**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>undefined</code> \| <code>number</code> | Index is the index of the item rendered or undefined if the item was rendered by the constructor or on resize. |

<a name="callbacks..renderContent"></a>

### callbacks~renderContent ⇒ <code>string</code> \| <code>Element</code> \| <code>object</code>
**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  
**Returns**: <code>string</code> \| <code>Element</code> \| <code>object</code> - String representing DOM elements. Instance of an Element. Any object.  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of the item. |
| width | <code>number</code> | Width of the item. |
| height | <code>number</code> | Height of the item. |
| type | <code>undefined</code> \| <code>string</code> | Type is undefined for all occurances except when item is freshly added. |

<a name="callbacks..addComplete"></a>

### callbacks~addComplete : <code>function</code>
**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of the item added. |

<a name="callbacks..removeComplete"></a>

### callbacks~removeComplete : <code>function</code>
**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of the item removed. |

<a name="callbacks..moveComplete"></a>

### callbacks~moveComplete : <code>function</code>
**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of the item moved. |
| toX | <code>number</code> | Position along the x axis where the item is moved. |
| toY | <code>number</code> | Position along the y axis where the item is moved. |
| arrangedIndices | <code>Array.&lt;number&gt;</code> | Indices of the arranged items. |

<a name="callbacks..resizeComplete"></a>

### callbacks~resizeComplete : <code>function</code>
**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of the resized item. |
| width | <code>number</code> | Width of the item resized. |
| height | <code>number</code> | Height of the item resized. |
| arrangedIndices | <code>Array.&lt;number&gt;</code> | Indices of the arranged items. |

<a name="callbacks..renderPlugin"></a>

### callbacks~renderPlugin : <code>function</code>
**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| renderData | <code>object</code> | Data received from renderContent callback. |
| element | <code>Element</code> | Element object of the item that is being rendered. |

<a name="callbacks..removePlugin"></a>

### callbacks~removePlugin : <code>function</code>
**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | Element which is going to be removed. |

<a name="publicConstants"></a>

## publicConstants : <code>options~publicConstants</code>
Constants which you can change or set at any point of time to get the desired behaviour.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| mobileAspectRatio | <code>number</code> | A nummber denoting the aspect ratio of each item for mobile view e.g. 5:4. Default value is 5/4. |
| moveGuideRadius | <code>number</code> | Radius of the Move guide radius a pseudo element at the top left corner of the item. You can remove move guide for a customized look and feel. Default value is 10. |
| resizeSquareGuideLength | <code>number</code> | Length of the square that is rendered at the bottom right corner of the item as a pseudo element. Default value is 10. |
| resizeSquareGuideBorderWidth | <code>number</code> | Width of the border of the square that is rendered at the bottom right corner of the item as a pseudo element. Default value is 3. |
| autoScrollDistance | <code>number</code> | A number by which the grid or desk is scrolled automatically on height increments for touch mode. Default value is 50. |
| autoScrollPoint | <code>number</code> | A height above the bottom at which scroll happens automatically for touch mode. Default value is 50. |
| moveOrResizeHeightIncrements | <code>number</code> | A number by which the height of the grid view is increased while resizing, adding or cuttting space when you reach the bottom for touch mode. Default value is 50. |
| mouseDownTime | <code>number</code> | Time to wait before initiating move, add or resize routines for mouse interaction. Default value is 500ms. |
| touchHoldTime | <code>number</code> | Time to wait before initiating move, add or resize routines for touch mode. Default value is 300ms. |
| demoWaitTime | <code>number</code> | TIme to wait before a demo of resize or move is initiated. Waring a very low demo wait time will cause unwanted behaviour as the algorithm needs some time to calculate next positions. Default is 500ms. |
| windowResizeTimeTime | <code>number</code> | Time to wait before initiating resize routines. Default value is 1000ms. |
| deskInteraction | <code>string</code> | Flag which tells whether the user wants to add an item or cut space by mouse or touch interaction. Default value is ADD. |
| latchMovedItem | <code>boolean</code> | To latch or not to latch on to other items when overlapped while dragging to move an item. Default value is true. |
| animateMovedItem | <code>boolean</code> | Wether to animate or not to animate the moved item. Default value is false. |
| animateTime | <code>numer</code> | Time to wait before re-activating animate to the moved item. Re-activating means the moved item should animate if other items are moved resized later. This flag might have some more features later on. Default value is 250ms. |

