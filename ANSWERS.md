- [ ] Why would you use class component over function components (removing hooks from the question)?
      I would HAVE to use class components over function components if I am working on a project that currently has class components or the upper managment says to do so.
- [ ] Name three lifecycle methods and their purposes.
      render(): The purpose of render is that it handles the rendering of your component to the UI. It happens during the mounting and updating of your component.
      componentDidMount(): This will allow the use of setState(). Calling the setState() here will update state and cause another rendering before the browser updates.
      componentWillUnmount(): The purpose of this is for clean up. The method gets called right before any component is unmounted and destroyed which makes it perfect to clean up anything that you do not need to be using.
- [ ] What is the purpose of a custom hook?
      The purpose of a custom hook is to be used and created when you find yourself breaking the DRY principle. It will allow you to create a reusable hook to use through out the project instead of repeating yourself over and over again.
- [ ] Why is it important to test our apps?
      Testing minimizes the risk of bugs finding their way into production code.
