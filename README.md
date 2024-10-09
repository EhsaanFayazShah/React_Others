# Hooks

### 1. `useParams()` :

`useParams` is a hook from React Router that lets to access the dynamic parts of the URL. When we  use `createBrowserRouter` to set up our routes with parameters, `useParams` pulls those values from the URL and makes them available in our component.

**Define routes with parameters using** `createBrowserRouter`:

```jsx
const router = createBrowserRouter([
  {
    path: "/user/:userId/post/:postId",
    element: <UserPost />,
  },
]);
```

**Extract parameters in the component with** `useParams`:

```jsx
import { useParams } from 'react-router-dom';

function UserPost() {
  let { userId, postId } = useParams();
  return (
    <div>
      <h2>User ID: {userId}</h2>
      <h2>Post ID: {postId}</h2>
    </div>
  );
}
```

**Wrap your app with** `RouterProvider`:

```jsx
function App() {
  return (
    <RouterProvider router={router} />
  );
}
```

When we navigate to `/user/123/post/456`, `useParams` returns an object: `{ userId: '123', postId: '456' }`.

---

### `useRef()`

Creates a reference to DOM elements or stores mutable values that persist across renders.

Returns: single property `current` .

```jsx
const myRef = useRef(initialvalue);
//myRef is an object ->{ current: initialvalue}
//current is Property that holds :
//1. DOM reference
//2. Mutable value that we want to persist across renders.
```

It returns an object with current property which we can use to store references to DOM elements or values that need to persist across renders without triggering Re-renders.

Multiple `useRef` for DOM Elements

```jsx
import { useRef } from 'react';

function MultipleRefsExample() {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusFirstInput = () => {
    firstInputRef.current.focus();
  };

  const focusSecondInput = () => {
    secondInputRef.current.focus();
  };

  return (
    <div>
      <input ref={firstInputRef} type="text" placeholder="First Input" />
      <input ref={secondInputRef} type="text" placeholder="Second Input" />
      <button onClick={focusFirstInput}>Focus First Input</button>
      <button onClick={focusSecondInput}>Focus Second Input</button>
    </div>
  );
}


Multiple `useRef`s for Values

import { useRef } from 'react';

function ValueRefsExample() {
  const countARef = useRef(0);
  const countBRef = useRef(0);

  const incrementA = () => {
    countARef.current += 1;
    console.log("Count A:", countARef.current);
  };

  const incrementB = () => {
    countBRef.current += 1;
    console.log("Count B:", countBRef.current);
  };

  return (
    <div>
      <button onClick={incrementA}>Increment A</button>
      <button onClick={incrementB}>Increment B</button>
    </div>
  );
}
```
