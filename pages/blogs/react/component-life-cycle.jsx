import React, { Fragment } from "react";
import Head from "next/head";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";

const ComponentLifeCycle = () => {
  return (
    <Fragment>
      <Head>
        <title>Component Life Cycle</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="blog-heading">Component Life Cycle</h1>

            <p className="mt-5">
              In ReactJS, every component creation process involves lifecycle
              methods. These lifecycle methods are termed as component&apos;s
              lifecycle. These lifecycle methods are not very complicated and
              called at various points during a component&apos;s life. The
              lifecycle of the component is divided into four phases.
            </p>
            <ol className="list-inside list-decimal mt-3">
              <li>Initial Phase</li>
              <li>Mounting Phase</li>
              <li>Updating Phase</li>
              <li>Unmounting Phase</li>
            </ol>

            <div className="mt-5">
              <p className="text-xl font-bold">1. Initial Phase</p>
              <p>
                It is the birth phase of the lifecycle of a ReactJS component.
                Here, the components starts its journy on a way to dom. In this
                phase a component contains the default Props and initial state.
                These default properties are done in the constructor of a
                component. The initial phase only accurs once and consists of
                the following methods.
              </p>

              <div>
                <p className="text-md font-bold mt-3">getDefaultProps()</p>
                <p>
                  It is used to specify the default value of this.props. It is
                  invoked before the creation of the component or any props from
                  the parent is passed into it.
                </p>
                <p className="text-md font-bold mt-3">getInitialState()</p>
                <p>
                  It is used to specify the dafault value of this.state. It is
                  invoked before the creation of the component.
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xl font-bold">2. Mounting Phase</p>

                <p>
                  In this phase, the intance of a component created and inserted
                  into the DOM. It consists of the following methods.
                </p>

                <div>
                  <p className="text-md font-bold mt-3">componentWillMount()</p>
                  <p>
                    This is invoked immediately before a component gets rendered
                    into DOM. In the case when you call setState() inside this
                    method, the component will not re-render.
                  </p>

                  <p className="text-md font-bold mt-3">componentDidMount()</p>
                  <p>
                    This is invoked immediately after a component gets rendered
                    and placed on the DOM. Now you can do any DOM querying
                    operations.
                  </p>
                  <p className="text-md font-bold mt-3">render()</p>
                  <p>
                    This method is defined in each and every component. It is
                    responsible for returning a single root HTML node element.
                    If you don&apos;t want to render anything, you can return a
                    null or false value.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xl font-bold">3. Updating Phase</p>
                <p>
                  It is the next phase of lifecycle of a react component. Here
                  we get new props and change state. This phase also allows to
                  handle user intraction and provide communication with the
                  components hierarchy. The main aim of this phase is to ensure
                  that the component is displaying the latest version of itself.
                  Unlike the birth or death phase, this phase repeat again and
                  again. This phase is consists of the following methods.
                </p>

                <div>
                  <p className="text-md font-bold mt-3">
                    componentWillRecieveProps()
                  </p>
                  <p>
                    It is invoked when a component receive new props. If you
                    want to update state in response to prop changes, you should
                    compare this.props and nextProps to perform state transition
                    by using this.setState() method.
                  </p>

                  <p className="text-md font-bold mt-3">
                    shouldComponentUpdate()
                  </p>
                  <p>
                    It is invoked when a component decides any changes/updation
                    to the DOM. It allows you to control the component&apos;s
                    behavior of updating itself. If this method returns true,
                    the component will update. Otherwise, the component will
                    skip the updating.
                  </p>

                  <p className="text-md font-bold mt-3">
                    componentWillUpdate()
                  </p>
                  <p>
                    It is invoked just before the component updating accurs.
                    Here you can&apos;t change the component state by invoking
                    this.setState() method. It will not be called, if
                    shouldComponentUpdate() return false.
                  </p>

                  <p className="text-md font-bold mt-3">render()</p>
                  <p>
                    It is invoked to examine this.props and this.state and
                    return one of the following types: React elements, Arrays
                    and Fragments, Booleans or null, String and Number. If
                    shouldComponentUpdate() return false, the code inside
                    render() will be invoked again to ensure the component
                    displays itself properly.
                  </p>

                  <p className="text-md font-bold mt-3">componentDidUpdate()</p>
                  <p>
                    It is invoked immediatly after the component updating
                    occurs. In this method, you can put any code inside this
                    which you want execute once the updating occurs. This method
                    is not invoked for the initial render.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xl font-bold">4. Unmounting Phase</p>

                <p>
                  It is the final phase of react component lifecycle. It is
                  calles when a component intance is destroyed and unmounted
                  from the DOM. This phase contains only one method and is given
                  below.
                </p>

                <div>
                  <p className="text-md font-bold mt-3">
                    componentWillUnmount()
                  </p>

                  <p>
                    This method is invoked immediately before a component is
                    destroyed and unmounted permanently. It performs any
                    necessary cleanup related task such as invalidating timers,
                    event listener. cancelling network requests, or cleaning up
                    DOM elements. If a component intance is unmounted, you
                    cannot mount it again.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="layoutBox2">Namaste</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default ComponentLifeCycle;
