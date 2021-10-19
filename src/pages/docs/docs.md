## Classes

<dl>
<dt><a href="#LimberGridView">LimberGridView</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#options">options</a> : <code>object</code></dt>
<dd><p>Parameters to the constructor.</p>
</dd>
<dt><a href="#gridData">gridData</a> : <code>options~gridData</code></dt>
<dd><p>Actual grid height and width. Output from function getGridData is scaled as per the dimensions defined here. Warning: Keys here to be set only once during the application development lifecycle. Changes, later on, are dangerous and will result in unwanted behavior. There is no actual need to change this. Custom values, if used, must be passed every time for instantiation.</p>
</dd>
<dt><a href="#positionData">positionData</a> : <code>Array.&lt;options~positionData&gt;</code></dt>
<dd><p>An array of Position data of items. It can be in two-point form i.e. top-left and bottom-right coordinate ({x1: 100, y1: 100, x2: 300, y2: 300}) or in dimension form with height and width ({x: 100, y: 100, width: 200, height: 200}). Position data are scaled during the runtime according to the screen size. Use the function getGridData to get position data to store for persistence which is scaled according to gridData.</p>
</dd>
<dt><a href="#callbacks">callbacks</a> : <code>options~callbacks</code></dt>
<dd><p>An object containing various callbacks.</p>
</dd>
<dt><a href="#publicConstants">publicConstants</a> : <code>options~publicConstants</code></dt>
<dd><p>Constants that you can change or set at any point in time to get the desired behavior.</p>
</dd>
</dl>

<a name="LimberGridView"></a>

## LimberGridView
**Kind**: global class  

* [LimberGridView](#LimberGridView)
    * [new LimberGridView(options)](#new_LimberGridView_new)
    * [.renderItem(index)](#LimberGridView+renderItem) ⇒ <code>undefined</code>
    * [.getGridData()](#LimberGridView+getGridData) ⇒ <code>object</code>
    * [.setDeskInteractMode(flag)](#LimberGridView+setDeskInteractMode) ⇒ <code>undefined</code>
    * [.setLatchMovedItem(flag)](#LimberGridView+setLatchMovedItem) ⇒ <code>undefined</code>
    * [.setShrinkToFit(value)](#LimberGridView+setShrinkToFit) ⇒ <code>undefined</code>
    * [.addItem(item)](#LimberGridView+addItem) ⇒ <code>undefined</code>
    * [.removeItem(index)](#LimberGridView+removeItem) ⇒ <code>undefined</code>
    * [.setIsMobileCheck(func)](#LimberGridView+setIsMobileCheck) ⇒ <code>undefined</code>
    * [.undo()](#LimberGridView+undo) ⇒ <code>undefined</code>
    * [.redo()](#LimberGridView+redo) ⇒ <code>undefined</code>
    * [.isUndoAvailable()](#LimberGridView+isUndoAvailable) ⇒ <code>boolean</code>
    * [.isRedoAvailable()](#LimberGridView+isRedoAvailable) ⇒ <code>boolean</code>
    * [.setAutoScrollDelay(value)](#LimberGridView+setAutoScrollDelay) ⇒ <code>undefined</code>
    * [.setAutoScrollForMouse(flag)](#LimberGridView+setAutoScrollForMouse) ⇒ <code>undefined</code>
    * [.destroy()](#LimberGridView+destroy) ⇒ <code>undefined</code>

<a name="new_LimberGridView_new"></a>

### new LimberGridView(options)
Constructor


| Param | Type |
| --- | --- |
| options | [<code>options</code>](#options) | 

<a name="LimberGridView+renderItem"></a>

### limberGridView.renderItem(index) ⇒ <code>undefined</code>
Call this function to forcefully re-render the contents of the item.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of the item to force re-render. |

<a name="LimberGridView+getGridData"></a>

### limberGridView.getGridData() ⇒ <code>object</code>
Call this function to get positionData scaled according to gridData.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  
**Returns**: <code>object</code> - Returns an object containing gridData and positionData.  
<a name="LimberGridView+setDeskInteractMode"></a>

### limberGridView.setDeskInteractMode(flag) ⇒ <code>undefined</code>
Call this function to change the publicConstant, deskInteractionMode during runtime.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| flag | <code>string</code> | A string with the value "ADD" or "CUTSPACE". |

<a name="LimberGridView+setLatchMovedItem"></a>

### limberGridView.setLatchMovedItem(flag) ⇒ <code>undefined</code>
Call this function to change the publicConstant, latchMovedItem during runtime.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| flag | <code>boolean</code> | A boolean flag. |

<a name="LimberGridView+setShrinkToFit"></a>

### limberGridView.setShrinkToFit(value) ⇒ <code>undefined</code>
Call this function to change the publicConstant, shrinkToFit during runtime.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Specifies the percentage value up to which items might be shrunk while arranging. Specify 0 not to shrink. |

<a name="LimberGridView+addItem"></a>

### limberGridView.addItem(item) ⇒ <code>undefined</code>
Call this function to add an item.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | An object with mandatory properties 'height' and 'width' and optional properties x and y. |

<a name="LimberGridView+removeItem"></a>

### limberGridView.removeItem(index) ⇒ <code>undefined</code>
Call this function to remove an item.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of the item to be removed. |

<a name="LimberGridView+setIsMobileCheck"></a>

### limberGridView.setIsMobileCheck(func) ⇒ <code>undefined</code>
Call this function to set isMobileCheck callback during runtime.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>isMobileCheck</code> | func is isMobileCheck callback to check if the screen is of a mobile device. |

<a name="LimberGridView+undo"></a>

### limberGridView.undo() ⇒ <code>undefined</code>
Undo the previous move or resize.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  
<a name="LimberGridView+redo"></a>

### limberGridView.redo() ⇒ <code>undefined</code>
Redo the next move or resize.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  
<a name="LimberGridView+isUndoAvailable"></a>

### limberGridView.isUndoAvailable() ⇒ <code>boolean</code>
Returns true when undo operation is possible.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  
<a name="LimberGridView+isRedoAvailable"></a>

### limberGridView.isRedoAvailable() ⇒ <code>boolean</code>
Returns true when a redo operation is possible.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  
<a name="LimberGridView+setAutoScrollDelay"></a>

### limberGridView.setAutoScrollDelay(value) ⇒ <code>undefined</code>
Call this function to change the publicConstant, autoScrollDelay during runtime.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Delay in milliseconds. |

<a name="LimberGridView+setAutoScrollForMouse"></a>

### limberGridView.setAutoScrollForMouse(flag) ⇒ <code>undefined</code>
Call this function to change the publicConstant, autoScrollForMouse during runtime.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  

| Param | Type | Description |
| --- | --- | --- |
| flag | <code>boolean</code> | A boolean flag. |

<a name="LimberGridView+destroy"></a>

### limberGridView.destroy() ⇒ <code>undefined</code>
Free event listeners and all other resources like DOM elements.

**Kind**: instance method of [<code>LimberGridView</code>](#LimberGridView)  
<a name="options"></a>

## options : <code>object</code>
Parameters to the constructor.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| el | <code>string</code> \| <code>object</code> | Id of the container or element. |
| editable | <code>boolean</code> | If enabled, users can resize, move, cut space, interactively add items on the desk. Default is true. |
| enableInteractiveAddAndCut | <code>boolean</code> | If enabled, users can add and cut space on the desk. Default is true. |
| enableTouchInteraction | <code>boolean</code> | If enabled, users can use touch to interact with items on the desk and with the desk also. Default is true. |
| autoArrange | <code>boolean</code> | If enabled, the first render is auto arranged. Auto arrange also happens when invalid data is received. |
| reRenderOnResize | <code>boolean</code> | If enabled, re-renders on window resize. Passing false is dangerous. Default is true. |
| isMobileCheck | [<code>isMobileCheck</code>](#options..isMobileCheck) | Callback that returns true when the screen size is of a mobile device. It receives boundingClientRect of LimberGridView as an argument. |
| pseudoElementContainer | <code>string</code> \| <code>object</code> | The id of the element or the element where the pseudo-elements are rendered that appear during moving. |
| itemMouseDownMoveCheck | [<code>itemMouseDownMoveCheck</code>](#options..itemMouseDownMoveCheck) | Callback function to check whether the mouse down event occurred at a desired area on the item for move event. |
| itemMouseDownResizeCheck | [<code>itemMouseDownResizeCheck</code>](#options..itemMouseDownResizeCheck) | Callback function to check whether the mouse down event occurred at a desired area on the item for resize event. |
| gridData | [<code>gridData</code>](#gridData) | Actual grid height and width. Output from function getGridData is scaled as per the dimensions defined here. Warning: Keys here to be set only once during the application development lifecycle. Changes, later on, are dangerous and will result in unwanted behavior. There is no actual need to change this. Custom values, if used, must be passed every time for instantiation. |
| positionData | [<code>positionData</code>](#positionData) | An array of Position data of items. It can be in two-point form i.e. top-left and bottom-right coordinate ({x1: 100, y1: 100, x2: 300, y2: 300}) or in dimension form with height and width ({x: 100, y: 100, width: 200, height: 200}). Position data are scaled during the runtime according to the screen size. Use the function getGridData to get position data to store for persistence which is scaled according to gridData. |
| callbacks | [<code>callbacks</code>](#callbacks) | An object containing various callbacks. |
| publicConstants | [<code>publicConstants</code>](#publicConstants) | Constants that you can change or set at any point in time to get the desired behavior. |


* [options](#options) : <code>object</code>
    * [~isMobileCheck](#options..isMobileCheck) ⇒ <code>boolean</code>
    * [~itemMouseDownMoveCheck](#options..itemMouseDownMoveCheck) ⇒ <code>boolean</code>
    * [~itemMouseDownResizeCheck](#options..itemMouseDownResizeCheck) ⇒ <code>boolean</code>

<a name="options..isMobileCheck"></a>

### options~isMobileCheck ⇒ <code>boolean</code>
Callback that returns true when the screen size is of a mobile device. It receives boundingClientRect of LimberGridView as an argument.

**Kind**: inner typedef of [<code>options</code>](#options)  
**Returns**: <code>boolean</code> - Returns true when the screen size is of a mobile device.  

| Param | Type | Description |
| --- | --- | --- |
| boundingClientRect | <code>object</code> | boundingClientRect of LimberGridView. |

<a name="options..itemMouseDownMoveCheck"></a>

### options~itemMouseDownMoveCheck ⇒ <code>boolean</code>
Callback function to check whether the mouse down event occurred at a desired area on the item for move event.

**Kind**: inner typedef of [<code>options</code>](#options)  
**Returns**: <code>boolean</code> - Returns true if the mouse down event got triggered at the desired area on the item for move event.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | The distance along the x-axis of the item, the mouse-down event was triggered. |
| y | <code>Number</code> | The distance along the y-axis of the item, the mouse-down event was triggered. |
| positionData | <code>object</code> | Position data of the item. |
| index | <code>number</code> | Index of the item in the position data array. |
| target | <code>object</code> | Target element where mouse down event was triggered. |

<a name="options..itemMouseDownResizeCheck"></a>

### options~itemMouseDownResizeCheck ⇒ <code>boolean</code>
Callback function to check whether the mouse down event occurred at a desired area on the item for resize event.

**Kind**: inner typedef of [<code>options</code>](#options)  
**Returns**: <code>boolean</code> - Returns true if the mouse down event got triggered at the desired area on the item for resize event.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | The distance along the x-axis of the item, the mouse-down event was triggered. |
| y | <code>Number</code> | The distance along the y-axis of the item, the mouse-down event was triggered. |
| positionData | <code>object</code> | Position data of the item. |
| index | <code>number</code> | Index of the item in positionData array. |
| target | <code>object</code> | Target element where mouse down event was triggered. |

<a name="gridData"></a>

## gridData : <code>options~gridData</code>
Actual grid height and width. Output from function getGridData is scaled as per the dimensions defined here. Warning: Keys here to be set only once during the application development lifecycle. Changes, later on, are dangerous and will result in unwanted behavior. There is no actual need to change this. Custom values, if used, must be passed every time for instantiation.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| WIDTH | <code>number</code> | Width of the Grid. It is scaled internally as per the device screen size for visual consistency. The default value is 1920. |
| Height | <code>number</code> | of the Grid. It is scaled internally as per the device screen size for visual consistency. The default value is 1080. |
| MARGIN | <code>number</code> | The margin for the items. It is scaled internally as per the device screen size for visual consistency. The default value is 8. |
| MIN_HEIGHT_AND_WIDTH | <code>number</code> | The minimum value for height and width for any item. It is scaled internally as per the device screen size for visual consistency. The default value is 150. |

<a name="positionData"></a>

## positionData : <code>Array.&lt;options~positionData&gt;</code>
An array of Position data of items. It can be in two-point form i.e. top-left and bottom-right coordinate ({x1: 100, y1: 100, x2: 300, y2: 300}) or in dimension form with height and width ({x: 100, y: 100, width: 200, height: 200}). Position data are scaled during the runtime according to the screen size. Use the function getGridData to get position data to store for persistence which is scaled according to gridData.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Distance of item along the x-axis. |
| y | <code>number</code> | Distance of item along the y-axis. |
| width | <code>number</code> | Width of the item. |
| height | <code>number</code> | Height of the item. |
| x1 | <code>number</code> | Distance of item along the x-axis for the top-left corner. |
| y1 | <code>number</code> | Distance of item along the y-axis for the top-left corner. |
| x2 | <code>number</code> | Distance of item along the x-axis for the bottom-right corner. |
| x2 | <code>number</code> | Distance of item along the y-axis for the bottom-right corner. |

<a name="callbacks"></a>

## callbacks : <code>options~callbacks</code>
An object containing various callbacks.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| renderComplete | [<code>renderComplete</code>](#callbacks..renderComplete) | Callback function invoked after rendering contents of an item. It does not get invoked after re-rendering items whose indices are affected due to the removal of any item. It receives the index of the item as an argument. For the first time render, invocation of this callback is batched and doesn't receive any argument. |
| renderContent | [<code>renderContent</code>](#callbacks..renderContent) | Callback function called to receive the contents of the item. Also called for all the items whose indices have changed due to the removal of any item. In such cases, it is invoked after removeComplete. |
| addComplete | [<code>addComplete</code>](#callbacks..addComplete) | Callback function called when addition of an item is complete. |
| removeComplete | [<code>removeComplete</code>](#callbacks..removeComplete) | Callback function called when removing of item is complete. |
| moveComplete | [<code>moveComplete</code>](#callbacks..moveComplete) | Callback function called when moving of item is complete. |
| resizeComplete | [<code>resizeComplete</code>](#callbacks..resizeComplete) | Callback function called when resizing of item is complete. |
| renderPlugin | [<code>renderPlugin</code>](#callbacks..renderPlugin) | Callback function called after renderContent and before renderComplete and addComplete but after removeComplete  for items to be rerender after a removeal of an item. |
| removePlugin | [<code>removePlugin</code>](#callbacks..removePlugin) | Callback function called before the item is removed from the DOM. Also before removeComplete. |
| getLogMessage | [<code>getLogMessage</code>](#callbacks..getLogMessage) | The callback function to get logs for errors like when the user drags outside of grid view. Returns an object with keys type and message. |
| getArrangeTime | [<code>getArrangeTime</code>](#callbacks..getArrangeTime) | The callback function to get logs for the move or resize operation. Returns time taken, resize count, and count of rectangles processed internally. |
| offsetMovePseudoElement | [<code>offsetMovePseudoElement</code>](#callbacks..offsetMovePseudoElement) | The callback function to offset the move helper element from the top-left. Receives current cursor or touch coordinates and item dimensions in the two-point form as arguments. Use these details to offset the move helper top-left from the curser point. |


* [callbacks](#callbacks) : <code>options~callbacks</code>
    * [~renderComplete](#callbacks..renderComplete) ⇒ <code>undefined</code>
    * [~renderContent](#callbacks..renderContent) ⇒ <code>string</code> \| <code>Element</code> \| <code>object</code>
    * [~addComplete](#callbacks..addComplete) ⇒ <code>undefined</code>
    * [~removeComplete](#callbacks..removeComplete) ⇒ <code>undefined</code>
    * [~moveComplete](#callbacks..moveComplete) ⇒ <code>undefined</code>
    * [~resizeComplete](#callbacks..resizeComplete) ⇒ <code>undefined</code>
    * [~renderPlugin](#callbacks..renderPlugin) ⇒ <code>undefined</code>
    * [~removePlugin](#callbacks..removePlugin) ⇒ <code>undefined</code>
    * [~getLogMessage](#callbacks..getLogMessage) ⇒ <code>undefined</code>
    * [~getArrangeTime](#callbacks..getArrangeTime) ⇒ <code>undefined</code>
    * [~offsetMovePseudoElement](#callbacks..offsetMovePseudoElement) ⇒ <code>object</code>

<a name="callbacks..renderComplete"></a>

### callbacks~renderComplete ⇒ <code>undefined</code>
Callback function invoked after rendering contents of an item. It does not get invoked after re-rendering items whose indices are affected due to the removal of any item. It receives the index of the item as an argument. For the first time render, invocation of this callback is batched and doesn't receive any argument.

**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>undefined</code> \| <code>number</code> | Index of the item rendered or undefined if batched by the constructor or during resize. |

<a name="callbacks..renderContent"></a>

### callbacks~renderContent ⇒ <code>string</code> \| <code>Element</code> \| <code>object</code>
Callback function called to receive the contents of the item. Also called for all the items whose indices have changed due to the removal of any item. In such cases, it is invoked after removeComplete.

**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  
**Returns**: <code>string</code> \| <code>Element</code> \| <code>object</code> - Should return a string representing DOM element or an instance of DOM element or an object. When an object is returned, renderPlugin gets triggered.  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of the item. |
| width | <code>number</code> | Width of the item. |
| height | <code>number</code> | Height of the item. |
| type | <code>undefined</code> \| <code>string</code> | Type is undefined for all occurrences. An exception to this case is when an item is created by the user using add APIs. In this case, the type is a string, and the value is 'isAdd'. |

<a name="callbacks..addComplete"></a>

### callbacks~addComplete ⇒ <code>undefined</code>
The callback function, called after the creation of an item is complete.

**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of the item added. |

<a name="callbacks..removeComplete"></a>

### callbacks~removeComplete ⇒ <code>undefined</code>
The callback function, called when the removal of an item is complete.

**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of the item removed. |

<a name="callbacks..moveComplete"></a>

### callbacks~moveComplete ⇒ <code>undefined</code>
The callback function, called when moving an item is complete.

**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of the item moved. |
| toX | <code>number</code> | The distance along the x-axis where the user placed the item. |
| toY | <code>number</code> | The distance along the y-axis where the user placed the item. |
| arrangedIndices | <code>Array.&lt;number&gt;</code> | An array of indices of the arranged items. |

<a name="callbacks..resizeComplete"></a>

### callbacks~resizeComplete ⇒ <code>undefined</code>
The callback function, called when resizing of an item is complete.

**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of the item resized. |
| width | <code>number</code> | Width of the item resized. |
| height | <code>number</code> | The height of the item resized. |
| arrangedIndices | <code>Array.&lt;number&gt;</code> | An array of indices of the arranged items. |

<a name="callbacks..renderPlugin"></a>

### callbacks~renderPlugin ⇒ <code>undefined</code>
The callback function, called after renderContent and before renderComplete and addComplete. It is also called, after removeComplete for items whose indices are affected due to the removal of any item. In the function body of renderPlugin, you can render your React JSX using 'ReactDOM.render'.

**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| renderData | <code>object</code> | Data received from renderContent callback. |
| element | <code>Element</code> | The instance of an element inside which the content is to be rendered. |

<a name="callbacks..removePlugin"></a>

### callbacks~removePlugin ⇒ <code>undefined</code>
The callback function, called just before the item is removed from the DOM and before removeComplete. In the function body of removePlugin, necessary clean-up can be performed by frameworks like react (e.g. calling 'ReactDOM.unmountComponentAtNode').

**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The instance of an element which is going to be removed from the DOM. |

<a name="callbacks..getLogMessage"></a>

### callbacks~getLogMessage ⇒ <code>undefined</code>
The callback function to get logs for errors like when the user drags outside of grid view. Returns an object with keys type and message.

**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| log | <code>object</code> | Returns an object with keys type and message. |

<a name="callbacks..getArrangeTime"></a>

### callbacks~getArrangeTime ⇒ <code>undefined</code>
The callback function to get logs for the move or resize operation. Returns time taken, resize count, and count of rectangles processed internally.

**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | The time taken for all arrangement jobs to complete. |
| resizeCount | <code>number</code> | The number of items resized. |
| count | <code>number</code> | The number of rectangles processed internally. |

<a name="callbacks..offsetMovePseudoElement"></a>

### callbacks~offsetMovePseudoElement ⇒ <code>object</code>
The callback function to offset the move helper element from the top-left. Receives current cursor or touch coordinates and item dimensions in the two-point form as arguments. Use these details to offset the move helper top-left from the curser point.

**Kind**: inner typedef of [<code>callbacks</code>](#callbacks)  
**Returns**: <code>object</code> - An object with keys x and y. It represents the translated top-left point of the move pseudo-element.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The distance along the x-axis where the user placed the cursor or touched the surface. |
| y | <code>number</code> | The distance along the y-axis where the user placed the cursor or touched the surface. |
| item | <code>object</code> | An item object in the two-point form. |

<a name="publicConstants"></a>

## publicConstants : <code>options~publicConstants</code>
Constants that you can change or set at any point in time to get the desired behavior.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| mobileAspectRatio | <code>number</code> | The floating-point number representing the aspect ratio of items for mobile view (e.g. 5:4). The default value is 5/4. |
| moveGuideRadius | <code>number</code> | The radius of the default move guide. Move guide is a pseudo-element at the top-left corner of every item. You can remove the move guide for a customized look and feel. The default value is 10. |
| resizeSquareGuideLength | <code>number</code> | The length of the square rendered at the bottom-right corner of every item as a pseudo-element. The default value is 10. |
| resizeSquareGuideBorderWidth | <code>number</code> | The width of the border of the square rendered at the bottom-right corner of the item as a pseudo-element. The default value is 3. |
| showBottomLeftResizeGuide | <code>boolean</code> | When this flag is true, resize guide is activated on the bottom-left corner also. Enabling this flag will cause the default move guide to be disabled and custom move behavior has to be defined. |
| autoScrollDistance | <code>number</code> | The number by which the desk is scrolled automatically on resize events and move events when auto-scroll is enabled. Auto-scroll is enabled by default for touch events. The default value is 50. |
| autoScrollPoint | <code>number</code> | The distance above the bottom or below the top at which scroll happens when auto-scroll is enabled. The default value is 50. |
| moveOrResizeHeightIncrements | <code>number</code> | A number by which the height of the grid view is increased while moving, resizing, adding, or cutting space when you reach the bottom when auto-scroll is enabled. The default value is 50. |
| autoScrollForMouse | <code>boolean</code> | Setting this to true will enable auto-scroll for the move, resize, add, and cut-space events for mouse-based operations. |
| mouseDownTime | <code>number</code> | The time to wait before initiating the move, resize, add, or cut-space routines after the mouse down event. The default value is 0ms. |
| touchHoldTime | <code>number</code> | The time to wait before initiating the move, resize, add, or cut-space routines after the tap-hold event. The default value is 300ms. |
| demoWaitTime | <code>number</code> | The time to wait before a demo for the resize or move event is initiated. Warning, a very low demo wait time will cause unwanted behavior as the algorithm needs some time for calculations. The default is 500ms. |
| windowResizeWaitTime | <code>number</code> | The time to wait before initiating window resize routines. The default value is 1000ms. |
| autoScrollDelay | <code>number</code> | The time to wait before the next scroll during a move, resize, add, or cut-space operation. |
| deskInteractionMode | <code>string</code> | The flag tells whether the user wants to add an item or cut space by mouse or touch interaction. Values can be ADD or CUTSPACE. The default value is ADD. |
| latchMovedItem | <code>boolean</code> | To enable or disable latch mode. The default value is true. |
| animateMovedItem | <code>boolean</code> | The flag tells whether to animate or not to animate the moved item. The default value is false. |
| animateTime | <code>number</code> | Time to wait before re-activating animate to the moved item. It can be the actual animate time set through CSS. LimberGridView temporarily disables animation for the moved item when the animateMovedItem flag is set to false through inline CSS. The default value is 250ms. |
| shrinkToFit | <code>number</code> | LimberGridView will shrink items by the percentage value specified while trying to arrange affected items. |

