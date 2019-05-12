
# Setup

This project was started with 
    
    expo init my-navs
    
From the [docs](https://facebook.github.io/react-native/docs/getting-started):  *If you are coming from a web background, the easiest way to get started with React Native is with Expo tools because they allow you to start a project without installing and configuring Xcode or Android Studio.*


# Run the app
 
1. Metro Bundler on Chrome

    `yarn start`

2. Select iOS or Android simulator manually on chrome Metro window


# Backend

This app first uses a simple `json-server` backend. Later to be moved to a PostgreSQL deployed on AppEngine. To launch:
    
    json-server db.json
    
*Note: Run the command in the root directory of the `.json` file.* 



# Resources 

- [Vector Icons](https://github.com/oblador/react-native-vector-icons) 
- Vector Icons [directory](https://oblador.github.io/react-native-vector-icons/) (react-native-vector-icons)
- Ioinicons [directory](https://ionicons.com/)
- [Color codes](https://htmlcolorcodes.com/)

TODOs

1. Change menu names to icons
2. Style buttons and headers and components, etc.
3. Hand over to Manuel for next phase design.

References: 

- Continue with [medium example](https://medium.com/@jan.hesters/building-a-react-native-app-with-complex-navigation-using-react-navigation-85a479308f52)
- Continue with this [Stack question for logic and styling of buttons](https://stackoverflow.com/questions/48370008/how-create-a-button-list-for-react-navigation-with-react-native-and-redux)
- The above example follows this [git code](https://github.com/matthiaw/react-native-redux-example/tree/master/src/Components)