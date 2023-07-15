import BackTo from "@/components/BackTo";
import Theme from "@/components/Theme";
import Head from "next/head";
import React, { Fragment } from "react";

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

            <div className="mt-3">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default CssSelector;
