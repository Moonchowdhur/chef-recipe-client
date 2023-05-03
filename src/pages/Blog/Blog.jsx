import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const Blog = () => {
  return (
    <div className="md:mt-6 mt-32 p-4 md:px-12">
      <div className="flex text-[#41644A] font-bold gap-3 items-center justify-center">
        <h1 className="md:text-5xl text-xl underline pb-2">
          Question & Anwser section
        </h1>
        <button className=" btn bg-green-900 flex items-center gap-2 border rounded-full">
          Download
          <AiOutlineArrowDown className="rounded-full md:text-3xl text-xl bg-[#41644A] text-white font-bold" />
        </button>
      </div>
      <div className=" bg-slate-300 text-cyan-800 my-7 p-7 rounded">
        <h2 className="text-4xl font-bold my-3">
          1.Differences between uncontrolled and controlled components?
        </h2>
        <p className="mt-4 font-medium text-xl">
          (a)A controlled component is a component that is controlled by React
          state, while an uncontrolled component is a component that maintains
          its own internal state.
        </p>
        <p className="mt-4   font-medium text-xl">
          (b)In controlled components, all event handling is done in the parent
          component. The parent component receives the event and updates the
          state accordingly but in uncontrolled components, the event handling
          is done in the component itself. The component listens for events and
          updates its internal state accordingly.
        </p>
        <p className="mt-4 font-medium text-xl">
          (c) Controlled components can be slower than uncontrolled components
          because of the extra layer of indirection. However, they offer better
          control and maintainability whereas, Uncontrolled components can be
          faster than controlled components, but they can be harder to maintain
          and debug since the state is not controlled by the parent component.
        </p>
        <p className="mt-4 font-medium text-xl">
          (d) Controlled components are useful when you need to have a high
          degree of control over the user input in your application, whereas
          Uncontrolled components, on the other hand, are useful when you want
          to let the user input data freely and don't need to validate it before
          submission.
        </p>
      </div>
      <div className=" bg-slate-300 text-cyan-800 my-7 p-7 rounded">
        <h2 className="text-4xl font-bold my-3">
          2.How to validate React props using PropTypes?
        </h2>
        <p className="mt-4 font-medium text-xl">
          (a)We you need to import the PropTypes module from the 'prop-types'
          package.
        </p>
        <p className="mt-4 font-medium text-xl">
          (b)Define the propTypes for component by adding a propTypes object to
          component.
        </p>
        <p className="mt-4 font-medium text-xl">
          (c)In the propTypes object, define the type and validation rules for
          each prop using PropTypes validators.
        </p>
        <p className="mt-4 font-medium text-xl">
          (d)Use advanced validators, such as PropTypes.shape or
          PropTypes.oneOfType, to validate more complex props.
        </p>
        <p className="mt-4 font-medium text-xl">
          (e)If a prop fails validation, PropTypes will log a warning message to
          the console. By using PropTypes to validate your props, we can catch
          errors early and ensure that your components receive the correct
          props.
        </p>
      </div>
      {/* 3rd question */}
      <div className=" bg-slate-300 text-cyan-800 my-7 p-7 rounded">
        <h2 className="text-4xl font-bold my-3">
          3.Tell us the difference between nodejs and express js.
        </h2>
        <p className="mt-4 font-medium text-xl">
          (a)Nodejs is a runtime environment that allows you to execute
          JavaScript code on the server-side whereas, Expressjs is a web
          framework built on top of Node.js.
        </p>
        <p className="mt-4 font-medium text-xl">
          (b)Nodejs provides an event-driven, non-blocking I/O model that makes
          it ideal for building scalable, high-performance applications whereas,
          Expressjs provides a set of tools and utilities that make it easier to
          build web applications and APIs.
        </p>
        <p className="mt-4 font-medium text-xl">
          (c)Node.js is built on top of the V8 JavaScript engine used in Google
          Chrome, which makes it extremely fast and efficient whereas,Express.js
          provides a set of middleware functions that can be used to handle HTTP
          requests and responses, parse request data, authenticate users, and
          more. It also provides a routing system that allows you to define URL
          routes and map them to functions that handle requests.
        </p>
      </div>
      {/* 4th question */}
      <div className=" bg-slate-300 text-cyan-800 my-7 p-7 rounded">
        <h2 className="text-4xl font-bold my-3">
          4.What is a custom hook, and why will you create a custom hook?
        </h2>
        <p className="mt-4 font-medium text-xl">
          (a) a custom hook is a reusable function that can contain stateful or
          stateless logic and can be shared between multiple components. Custom
          hooks are created using the use prefix, which indicates to React that
          it is a hook.
        </p>
        <p className="mt-4 font-medium text-xl">
          (b)It is used for to create a custom hook to encapsulate that logic
          and make it reusable across components.
        </p>
        <p className="mt-4 font-medium text-xl">
          (c)If application makes API calls in multiple components, we can
          create a custom hook to abstract the API calls and handle the loading,
          error, and data states in a consistent way.
        </p>
        <p className="mt-4 font-medium text-xl">
          (d)We can create a custom hook to handle reading and writing to local
          storage, making it easier to manage persistent data in application.
        </p>
        <p className="mt-4 font-medium text-xl">
          (e)We can improve the separation of concerns in codebase, making
          components simpler and easier to understand.
        </p>
      </div>
    </div>
  );
};

export default Blog;
