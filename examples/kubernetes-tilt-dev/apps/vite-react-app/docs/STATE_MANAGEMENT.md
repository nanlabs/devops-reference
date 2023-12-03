# 🗃️ State Management

There is no need to keep all of your state in a single centralized store. There are different needs for different types of state that can be split into several types:

## Component State

This is the state that only a component needs, and it is not meant to be shared anywhere else. But you can pass it as prop to children components if needed. Most of the time, you want to start from here and lift the state up if needed elsewhere. For this type of state, you will usually need:

- [useState](https://reactjs.org/docs/hooks-reference.html#usestate) - for simpler states that are independent
- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) - for more complex states where on a single action you want to update several pieces of state

## Application State

This is the state that controls interactive parts of an application. Opening modals, notifications, changing color mode, etc. For best performance and maintainability, keep the state as close as possible to the components that are using it. Don't make everything global out of the box.

Our recommendation is to use any of the following state management libraries:

- [jotai](https://github.com/pmndrs/jotai)
- [recoil](https://recoiljs.org/)
- [zustand](https://github.com/pmndrs/zustand)

## Server Cache State

This is the state that comes from the server which is being cached on the client for further usage. It is possible to store remote data inside a state management store such as redux, but there are better solutions for that.

Our recommendation is:

- [react-query](https://react-query.tanstack.com/)

## Form State

This is a state that tracks users inputs in a form.

Forms in React can be [controlled](https://reactjs.org/docs/forms.html#controlled-components) and [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html).

Depending on the application needs, they might be pretty complex with many different fields which require validation.

Although it is possible to build any form using only React, there are pretty good solutions out there that help with handling forms such as:

- [React Hook Form](https://react-hook-form.com/)
