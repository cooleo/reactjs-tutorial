Lifecycle Methods
componentWillMount is executed before rendering, on both the server and the client side.

componentDidMount is executed after the first render only on the client side. This is where AJAX requests and DOM or state updates should occur. This method is also used for integration with other JavaScript frameworks and any functions with delayed execution such as setTimeout or setInterval. We are using it to update the state so we can trigger the other lifecycle methods.

componentWillReceiveProps is invoked as soon as the props are updated before another render is called. We triggered it from setNewNumber when we updated the state.

shouldComponentUpdate should return true or false value. This will determine if the component will be updated or not. This is set to true by default. If you are sure that the component doesn't need to render after state or props are updated, you can return false value.

componentWillUpdate is called just before rendering.

componentDidUpdate is called just after rendering.

componentWillUnmount is called after the component is unmounted from the dom. We are unmounting our component in main.js