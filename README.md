# React-js
React Library tutorial following the documentation on the official site

<ul>
	<li>React is a JavaScript library - one of the most popular ones, with over 100,000 stars on GitHub.</li>
	<li>React is not a framework (unlike Angular, which is more opinionated).
	</li>
	<li>React is not a framework (unlike Angular, which is more opinionated).
	</li>
	<li>
		React is used to build user interfaces (UI) on the front end.
	</li>
	<li>React is the view layer of an MVC application (Model View Controller)
	</li>
</ul>
<p>One of the most important aspects of React is the fact that you can create components, which are like custom, reusable HTML elements, to quickly and efficiently build user interfaces. React also streamlines how data is stored and handled, using state and props.</p>

<p>Imported Packages for a static React App</p>
<ul>
	<li>React - The React top level API</li>
	<li>React DOM - adds DOM-specific methods</li>
	<li>Babel - A Javascript compiler that lets us use ES6+ in old browsers</li>
</ul>

<p>The entry point for our app will be the root div element, which is named by convention. You'll also notice the text/babel script type, which is mandatory for using Babel</p>

<p>If you look into the project structure, you'll see a /public and /src directory, along with the regular  node_modules, .gitignore, README.md, and package.json.</p>

<p>In /public, our important file is index.html, which is very similar to the static index.html file. This time, no libraries or scripts are being loaded in. The /src directory will contain all our React code.</p>

<h2>JSX: JavaScript + XML</h2>
<p>JSX is actually closer to JavaScript, not HTML, so there are a few key differences to note when writing it.

className is used instead of class for adding CSS classes, as class is a reserved keyword in JavaScript.
Properties and methods in JSX are camelCase - onclick will become onClick.
Self-closing tags must end in a slash - e.g. <img /></p>

<h2>Components</h2>


<p>So far, we've created one component - the App component. Almost everything in React consists of components, which can be class components or simple components.</p>
<p>Most React apps have many small components, and everything loads into the main App component. Components also often get their own file.</p>

<h3>Class Components</h3>

<p>The Table component we created is a custom class component. We capitalize custom components to differentiate them from regular HTML elements. Back in App.js, we can load in the Table, first by importing it in</p>

<h3>Simple Components</h3>

<p>The other type of component in React is the simple component, which is a function. This component doesn't use the class keyword. Let's take our Table and make two simple components for it - a table header, and a table body.</p>

<p>As you can see, components can be nested in other components, and simple and class components can be mixed.</p>

<p>A class component must include render(), and the return can only return one parent element.</p>

<p>Comparison of Simple and Class Component</p>

<code>const SimpleComponent = () => {
  return <div>Example</div>
}</code>

<code>class ClassComponent extends Component {
  render() {
    return <div>Example</div>
  }
}</code>

<small>Note that if the return is contained to one line, it does not need parentheses.

</small>

<h2>Props</h2>

<p>One of the big deals about React is how it handles data, and it does so with properties, referred to as props, and with state. First, we'll focus on handling data with props.</p>

<p>You'll notice I've added a key index to each table row. You should always use keys when making lists in React, as they help identify each list item. We'll also see how this is necessary in a moment when we want to manipulate list items.

Props are an effective way to pass existing data to a React component, however the component cannot change the props - they're read-only. In the next section, we'll learn how to use state to have further control over handling data in React.</p>

<h2>State</h2>

<p>Right now, we're storing our character data in an array in a variable, and passing it through as props. This is good to start, but imagine if we want to be able to delete an item from the array. With props, we have a one way data flow, but with state we can update private data from a component.

You can think of state as any data that should be saved and modified without necessarily being added to a database - for example, adding and removing items from a shopping cart before confirming your purchase.</p>