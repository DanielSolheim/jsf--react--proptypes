# PropTypes

Add propTypes validation to the existing components (`Heading`, `Image`, `Repeater` and `ShowHide`).  Look at the example to see there are errors showing in the console after propTypes have been used.  This means the props are being passed in correctly.  Follow the steps below to complete the task.

## Example

[The example is here](https://jsf-react-proptypes.now.sh).

# Project Setup

**Fork** this repository into your account and then **clone** that repositroy onto your machine.

Once cloned on your machine:
1. Go to the folder in your **terminal/command line** and run `npm install`.
2. **Open** the project in your **code editor**.
3. To **run the website,** go to the folder in your **terminal/command line** and run `npm start`.

## Task Steps

### Examine the example
1. Firstly, look into `ExampleComponent.js`.  This compoent contains examples of all the PropTypes you will need to use.
2. You will see the component uses a number of props.  You can use your editor to highlight where props are used by simply pressing `ctrl/cmd + F` and searching for `props.`.
3. Below the component you will see the `propTypes` property being set that specifies the data type that each prop must be.
4. Also notice that `PropTypes` is imported at the top of the file.
5. In `App.js` you will see that the component is imported and used.
6. Notice how string props are passed into the compoent using `""` and NON-string props are passed in using `{}`.  Make sure you are correctly passing in non-string components using `{}`.
7. You can uncomment the non-working version of the example component to see what errors you will see output into the browser console.

### Adding propTypes to each component

The components need to be validated as follows:

#### Heading
- `text` is a **required** `string`
#### Image
- `source` is a **required** `string`
- `alternativeText` is a **required** `string`
#### Repeater
- `count` is a **required** `number`
- `children` are is a **required**
#### ShowHide
- `show` is a **required** `boolean`
- `children` are is a **required**

Use the ExampleComponent for how to validate props.

### Use the components

1. import the components into `App`.
2. Add each component into the app and pass in appropriate values.  Make sure to use `{}`to pass in non-strings.
3. For the Image you can use a placeholder image service like https://placedog.net/ to get easy image URLs.
4. For the Repeater, add a child paragraph into the repeat and set the count to 3.
5. Add ShowHide twice, once where the child content is display and once where it is hidden.  For the children of each simple use a paragraph of "This will be shown" and "This will be hidden".
