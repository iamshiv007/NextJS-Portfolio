import React, { Fragment } from "react";
import { CgClapperBoard } from "react-icons/cg";

const Projects = () => {
  return (
    <Fragment>
      <section id="projects">
        <div className={`dark:bg-black py-8`}>
          <div>
            <h3 className="sectionHeading">
              <span className="mr-4">
                <CgClapperBoard />
              </span>
              Projects
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-8">
            <div>
              <a
                target="_blank"
                href="https://ecommerce-application-shivraj.vercel.app"
              >
                <img src="/images/ecommerce.png" alt="" />
              </a>
              <p className="text-center p-1">Ecommerce Application</p>
            </div>
            <div>
              <a
                target="_blank"
                href="https://shiv-react-admin-dashboard.vercel.app/"
              >
                <img src="/images/admin-dashboard.png" alt="" />
              </a>
              <p className="text-center p-1">React Admin Dashboard</p>
            </div>
            <div>
              <a target="_blank" href="https://online-salon-app.vercel.app/">
                <img src="/images/salon-application.png" alt="" />
              </a>
              <p className="text-center p-1">Salon Appoinment Booking</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
