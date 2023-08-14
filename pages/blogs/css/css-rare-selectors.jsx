import React, { Fragment } from "react";
import Head from "next/head";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";

const CssSelector = () => {
  return (
    <Fragment>
      <Head>
        <title>Css-rare-selector</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <div>
              <h2 className="blog-heading">CSS Rare Selector</h2>
              <p className="mt-5">
                If you are a web developer then you have used many css selector
                to give styling to your web page. In this blog we are going to
                explore some rare but usefull selector of css
              </p>
            </div>

            <br />

            <div>
              <div>
                <h4 className="text-lg font-bold">
                  1. Adjacent Sibling Selector (+)
                </h4>
                <p>
                  In simple way it select the next first sibling respectively
                  tag.
                </p>
              </div>

              <br />

              <div>
                <h4 className="text-lg font-bold">
                  2. General Sibling Selector (~)
                </h4>
                <p>
                  Where + select next first sibling but ~ select all next
                  sibling after tag.
                </p>
              </div>

              <br />

              <h3 className="text-lg font-bold my-4">Pseudo class selector</h3>

              <div>
                <h4 className="text-lg font-bold">3. :active</h4>
                <p>Select all active link</p>
              </div>

              <br />

              <div>
                <h4 className="text-lg font-bold">4. :checked</h4>
                <p>Select all chcked input</p>
              </div>

              <br />

              <div>
                <h4 className="text-lg font-bold">5. :empty</h4>
                <p>Select all element that has no children</p>
              </div>

              <br />

              <div>
                <h4 className="text-lg font-bold">5. :enabled</h4>
                <p>Select all enabled input</p>
              </div>

              <br />

              <div>
                <h4 className="text-lg font-bold">6. :first-of-type</h4>
                <p>Select all element that is first element of its parent</p>
              </div>

              <br />

              <div>
                <h4 className="text-lg font-bold">7. :last-of-type</h4>
                <p>
                  Select all element that is last element of its parent(opposite
                  of first-of-type)
                </p>
              </div>

              <br />

              <div>
                <h4 className="text-lg font-bold">8. :focus</h4>
                <p>Select all input element that has focus</p>
              </div>

              <br />

              <div>
                <h4 className="text-lg font-bold">9. :in-range</h4>
                <p>Select all input element that has a value in a range</p>
              </div>

              <br />

              <div>
                <h4 className="text-lg font-bold">10. :invalid</h4>
                <p>Select all input element that has a invalid value</p>
              </div>

              <br />

              <div>
                <h4 className="text-lg font-bold">10. :lang(language)</h4>
                <p>
                  Select all element with a lang attribute value start with
                  language
                </p>
              </div>
            </div>
          </div>

          <div className="layoutBox2">
            <p>
              On August 6, 1991, without fanfare, British computer scientist Tim
              Berners-Lee published the first-ever website while working at
              CERN, the huge particle physics lab in Switzerland
            </p>
          </div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default CssSelector;
