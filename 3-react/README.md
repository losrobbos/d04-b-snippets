# React Projects

In this folder please find React mini projects, demonstrating React concepts

## Abbreviations & Terms for Web Projects

### Asset

A file in our project, e.g. JavaScript, CSS or Image, that potentially can get optimized before shipping.

E.g. CSS "assets" can be optimized for shipping, by merging them all together into ONE CSS file and "minify" them (=> compacting the resulting CSS file, e.g. by removing all whitespaces / newlines)

### Bundler

An applicaton that merges javascript & other assets like CSS files together and optimizes them (e.g. reduce filesize so the assets load as quickly as possible in the browser)

### Build process

The process that triggers the bundling & optimization. The result is usually a folder called "build" or "dist" (= distribution => optimized for distributing / deployment)

The resulting "build" folder can be deployed to any free or paid hoster easily, e.g. GitHub pages, Netlify, Vercel or Heroku

### WebPack

A famous bundler application for web projects. De facto standard of the past (gets more and more competition)

### CRA => Create-React-App

An NPM package which will create a react project using the bundler "Webpack". It will already setup a boilerplate for your project and a pre-configured "build process". 

So ideally - for basic projects - you just need to start the build process and can deploy the resulting "build" folder to any host provider, e.g. Vercel.

The package Create-React-App was created and is maintained by Facebook / Meta.

### Vite

An alternative build tool which uses "esbuild" under the hood for bundling instead of webpack. Esbuild is significantly faster compared to the WebPack bundler.

This package is maintained by the VueJS community



## Fundamental REACT Concepts

### Component

A reusable "lego" piece in your website, e.g. a header, including its javascript logic

### JSX

JSX (JavaScript XML) is kind of a mixture between HTML and JavaScript data.

The use case for JSX is to get reusable layouts, where you can fill in different data.

You can write an "HTML layout" once, and reuse it throughout your application.

JSX is comparable to a javascript function that RETURNS HTML at the end, but different HTML depending on the INPUT variables. Different input variables => <b>same LAYOUT & STYLE, but different CONTENT</b>. 

This way you can e.g. create a list of todo cards, each having the same layout & style, but each having different content in the card.


### Props

Props are for components what parameters are for functions. 

You use props to give some INPUT to your component. 

Usually props are used to pass in DATA that should get rendered into an existing HTML layout.

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

	return <div>{name} is {age} years old</div>

}
```


### Rendering

The process where React updates the DOM. 

Typically this is triggered by some USER ACTION, e.g. the user filtering a list or adding a new item.

The RENDERING is done by React automatically, whenever there IS something NEW / UPDATED data to render.

And the thing that TRIGGERS this rendering process is the so called STATE...


### State

STATE is any data that could get UPDATED in the UI.

State is data that will change based on USER ACTION.

E.g. the user creates a new item in the UI (whatever item that is) by clicking some button.

In React we will NOT update the DOM directly with JavaScript. It will do that work for us.

Instead we will change a so called STATE variable, using a SETTER function. 

By calling this SETTER function, React will automatically (!) - in the background so to say - update the DOM for us! So it will do all the magic of "document.querySelector" and DOM update logic for us. 

Example: 
`const [user, setUser] = useState( { name: "Rob", age: 38  } )` 

In this case "user" is the STATE VARIABLE. "setUser" is the SETTER function.

We can use this setter function to UPDATE the user object. 

`setUser({...user, age: 39}) // set a new age on the user object`

Once the SETTER function updated the object, React will now trigger the UPDATE of the DOM auto-magically behind the scenes.

It will also do it very efficient. Meaning: It will just update the DOM in that parts that actually have changed, and will leave everything else untouched!

The concept of state is a very universal and CENTRAL concept in Frontend Frameworks these days.

So learn it once, and you will have a solid foundation for modern web programming!


## Resources

I have created a commented list of resources if you are looking for some hints where you could got next ;)

https://github.com/losrobbos/coding-advanced-resources


