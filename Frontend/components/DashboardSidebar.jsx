import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DashboardSidebar = () => {
  return (
    <>
      <div
        style={{ width: "300px" }}
        className="px-5 py-5 bg-white hidden lg:block"
      >
        <div className="rounded-md border-2 flex p-2">
          <Image src="/favicon_io/search.svg" height={16} width={16} />
          <input placeholder="Search..." type="text" className="w-full" />
        </div>
        <h4 className="my-5 text-h4">Projects</h4>
        <ul className="sidebar-lists">
          <li>
            <Link className="sidebar_icon" href="#">
              <div className="sidebar__icon">
                <Image src="/favicon_io/bebo.svg" height={20} width={20} />
              </div>
              <div>
                <h5>Briviba SaaS</h5>
                <p>By James</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="sidebar_icon" href="#">
              <div className="sidebar__icon">
                <Image src="/favicon_io/bebo.svg" height={20} width={20} />
              </div>
              <div>
                <h5>Briviba SaaS</h5>
                <p>By James</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="sidebar_icon" href="#">
              <div className="sidebar__icon">
                <Image src="/favicon_io/vimeo.svg" height={20} width={20} />
              </div>
              <div>
                <h5>Briviba SaaS</h5>
                <p>By James</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="sidebar_icon" href="#">
              <div className="sidebar__icon">
                <Image src="/favicon_io/vimeo.svg" height={20} width={20} />
              </div>
              <div>
                <h5>Briviba SaaS</h5>
                <p>By James</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashboardSidebar;
