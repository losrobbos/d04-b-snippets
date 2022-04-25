# React Projects

In this folder please find React mini projects, demonstrating React concepts

## Fundamental REACT Concepts

### Component

A reusable "lego" piece in your website, e.g. a header, including its javascript logic

### Props

Props are for components what parameters are for functions that you call. 

You use props to give some INPUT to your component, usually used to pass in data that should get rendering into some existing HTML layout.

E.g. you have a reusable "UserCard" component that should render the SAME layout, but each time with different DATA.

So you setup the layout in the component UserCard using JSX.

And you pass in the actual DATA that should get displayed, using PROPS

Example: 

// Passing user data as PROP

```
const user = { name: "Rob", age: 38 }

return (
	<UserCard user={ user } />
)
```

```
// UserCard component

// receiving the data
const UserCard = ( { name, age } ) => {
	...
}
```

### STATE

STATE is any data that could get UPDATED in the UI.
State is data that will change based on USER ACTION.

E.g. the user creates a new item in the UI (whatever item that is).

In React we will NOT update the DOM directly.

Instead we will change a so called STATE variable instead, using a SETTER function. 

By calling this SETTER function, React will automatically (!) - in the background so to say - update the DOM for us! So it will do all the magic of "document.querySelector" and DOM update logic for us. 

Example: 
`const [user, setUser] = useState( { name: "Rob", age: 38  } )` 

In this case "user" is the STATE VARIABLE. "setUser" is the SETTER function.

We can use this setter function to UPDATE the user object. 

`setUser({...user, age: 39}) // set a new age on the user object`

One the SETTER function updated the object, React will now trigger the UPDATE of the DOM auto-magically.

It will also do it very efficient. Meaning: It will just update the DOM in that parts that actually have changed, and will leave everything else untouched!

The concept of state is a very universal and CENTRAL concept in Frontend Frameworks these days.

So learn it once, and you will have a solid foundation for modern web programming!




## Abbreviations & Terms

Bundler => an applicaton that merges javascript & other assets like CSS files together and optimizes them (e.g. reduce filesize so the assets load as quickly as possible in the browser)

Build process => the process that triggers the bundling & optimization. The result is usually a folder called "build" or "dist" (= distribution => optimized for distributing / deployment)

CRA => Create-React-App => an executable NPM package which will create a react project using the "bundler" WebPack

Vite => another build tool which uses "esbuild" under the hood for bundling instead of webpack. Esbuild is significantly faster that the WebPack bundler

