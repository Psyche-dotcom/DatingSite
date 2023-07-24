import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import Image from "next/image";
import Link from "next/link";
import BarChartComponent from "./BarChartComponents";
import AreaChartComponent from "./AreaChartComponent";
import AreaChartComponentBlue from "./AreaChartComponentBlue";

const DashboardMain = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="bg-grey p-5">
      <BarChartComponent />
      <div className="bg-white shadow-md rounded-lg p-4 mb-5">
        <h5 className="text-h5">Members Statistics</h5>
        <div className="flex gap-4 items-center justify-between">
          <h6>Over 500 members</h6>
          <Link
            href="#"
            className="flex gap-2 items-center rounded-md px-4 py-2 bg-grey"
          >
            <Image src="/favicon_io/plus.svg" height={16} width={16} />
            <h6>New Member</h6>
          </Link>
        </div>
        <table className="w-full tabble">
          <thead>
            <tr>
              <th>Authors</th>
              <th>Company</th>
              <th>Progress</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src="/asset/testImage.jpg"
                    height={45}
                    width={45}
                    className="rounded-md"
                  />
                  <div>
                    <p className="text-h6">Ana Simmons</p>
                    <p>HTML, JS, ReactJS</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-h6">Intertico</p>
                <p>Web, UI/UX, Design</p>
              </td>
              <td>
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={50}
                />
              </td>
              <td className="flex items-center gap-2">
                <div className="icon">
                  <Image src="/asset/loading-bar.png" height={16} width={16} />
                </div>
                <div className="icon">
                  <Image src="/asset/pencil.png" height={16} width={16} />
                </div>
                <div className="icon">
                  <Image src="/asset/delete.png" height={16} width={16} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src="/asset/testImage.jpg"
                    height={45}
                    width={45}
                    className="rounded-md"
                  />
                  <div>
                    <p className="text-h6">Ana Simmons</p>
                    <p>HTML, JS, ReactJS</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-h6">Intertico</p>
                <p>Web, UI/UX, Design</p>
              </td>
              <td>
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={50}
                />
              </td>
              <td className="flex items-center gap-2">
                <div className="icon">
                  <Image src="/asset/loading-bar.png" height={16} width={16} />
                </div>
                <div className="icon">
                  <Image src="/asset/pencil.png" height={16} width={16} />
                </div>
                <div className="icon">
                  <Image src="/asset/delete.png" height={16} width={16} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src="/asset/testImage.jpg"
                    height={45}
                    width={45}
                    className="rounded-md"
                  />
                  <div>
                    <p className="text-h6">Ana Simmons</p>
                    <p>HTML, JS, ReactJS</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-h6">Intertico</p>
                <p>Web, UI/UX, Design</p>
              </td>
              <td>
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={50}
                />
              </td>
              <td className="flex items-center gap-2">
                <div className="icon">
                  <Image src="/asset/loading-bar.png" height={16} width={16} />
                </div>
                <div className="icon">
                  <Image src="/asset/pencil.png" height={16} width={16} />
                </div>
                <div className="icon">
                  <Image src="/asset/delete.png" height={16} width={16} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src="/asset/testImage.jpg"
                    height={45}
                    width={45}
                    className="rounded-md"
                  />
                  <div>
                    <p className="text-h6">Ana Simmons</p>
                    <p>HTML, JS, ReactJS</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-h6">Intertico</p>
                <p>Web, UI/UX, Design</p>
              </td>
              <td>
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={50}
                />
              </td>
              <td className="flex items-center gap-2">
                <div className="icon">
                  <Image src="/asset/loading-bar.png" height={16} width={16} />
                </div>
                <div className="icon">
                  <Image src="/asset/pencil.png" height={16} width={16} />
                </div>
                <div className="icon">
                  <Image src="/asset/delete.png" height={16} width={16} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src="/asset/testImage.jpg"
                    height={45}
                    width={45}
                    className="rounded-md"
                  />
                  <div>
                    <p className="text-h6">Ana Simmons</p>
                    <p>HTML, JS, ReactJS</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-h6">Intertico</p>
                <p>Web, UI/UX, Design</p>
              </td>
              <td>
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={50}
                />
              </td>
              <td className="flex items-center gap-2">
                <div className="icon">
                  <Image src="/asset/loading-bar.png" height={16} width={16} />
                </div>
                <div className="icon">
                  <Image src="/asset/pencil.png" height={16} width={16} />
                </div>
                <div className="icon">
                  <Image src="/asset/delete.png" height={16} width={16} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <AreaChartComponent />
      <AreaChartComponentBlue />
      <div className="bg-white shadow-md rounded-lg p-4 w-full mb-5">
        <h5 className="mb-5 text-h5">My competitors</h5>
        <div className="flex justify-between mb-4">
          <div className="flex gap-2 items-center">
            <div>
              <Image src="/asset/comp-img.jpg" height={60} width={90} />
            </div>
            <div>
              <h6 className="text-h6">Cup & Green</h6>
              <p>Study highway types</p>
            </div>
          </div>
          <div>
            <p className="text-h5">24,900</p>
            <p>Sales</p>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex gap-2 items-center">
            <div>
              <Image src="/asset/comp-img.jpg" height={60} width={90} />
            </div>
            <div>
              <h6 className="text-h6">Cup & Green</h6>
              <p>Study highway types</p>
            </div>
          </div>
          <div>
            <p className="text-h5">24,900</p>
            <p>Sales</p>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex gap-2 items-center">
            <div>
              <Image src="/asset/comp-img.jpg" height={60} width={90} />
            </div>
            <div>
              <h6 className="text-h6">Cup & Green</h6>
              <p>Study highway types</p>
            </div>
          </div>
          <div>
            <p className="text-h5">24,900</p>
            <p>Sales</p>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex gap-2 items-center">
            <div>
              <Image src="/asset/comp-img.jpg" height={60} width={90} />
            </div>
            <div>
              <h6 className="text-h6">Cup & Green</h6>
              <p>Study highway types</p>
            </div>
          </div>
          <div>
            <p className="text-h5">24,900</p>
            <p>Sales</p>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex gap-2 items-center">
            <div>
              <Image src="/asset/comp-img.jpg" height={60} width={90} />
            </div>
            <div>
              <h6 className="text-h6">Cup & Green</h6>
              <p>Study highway types</p>
            </div>
          </div>
          <div>
            <p className="text-h5">24,900</p>
            <p>Sales</p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 mb-5">
        <h5 className="text-h5">Trends</h5>

        <h6>Latest tech trends</h6>

        <div className="flex justify-between mb-4">
          <div className="flex gap-4 items-center">
            <div className="p-3 icon">
              <Image src="/favicon_io/bebo.svg" height={24} width={24} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <p className="text-h5">+82$</p>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex gap-4 items-center">
            <div className="p-3 icon">
              <Image src="/favicon_io/bebo.svg" height={24} width={24} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <p className="text-h5">+82$</p>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex gap-4 items-center">
            <div className="p-3 icon">
              <Image src="/favicon_io/bebo.svg" height={24} width={24} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <p className="text-h5">+82$</p>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex gap-4 items-center">
            <div className="p-3 icon">
              <Image src="/favicon_io/bebo.svg" height={24} width={24} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <p className="text-h5">+82$</p>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex gap-4 items-center">
            <div className="p-3 icon">
              <Image src="/favicon_io/bebo.svg" height={24} width={24} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <p className="text-h5">+82$</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
          <h5 className="mb-5 text-h5">Authors</h5>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
          <h5 className="mb-5 text-h5">Notifications</h5>
          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <div className="p-3 icon">
                <Image src="/favicon_io/bebo.svg" height={24} width={24} />
              </div>
              <div>
                <h6 className="text-h6">Briviba SaaS</h6>
                <p>By James</p>
              </div>
            </div>
            <p>82%</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <div className="p-3 icon">
                <Image src="/favicon_io/bebo.svg" height={24} width={24} />
              </div>
              <div>
                <h6 className="text-h6">Briviba SaaS</h6>
                <p>By James</p>
              </div>
            </div>
            <p>82%</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <div className="p-3 icon">
                <Image src="/favicon_io/bebo.svg" height={24} width={24} />
              </div>
              <div>
                <h6 className="text-h6">Briviba SaaS</h6>
                <p>By James</p>
              </div>
            </div>
            <p>82%</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <div className="p-3 icon">
                <Image src="/favicon_io/bebo.svg" height={24} width={24} />
              </div>
              <div>
                <h6 className="text-h6">Briviba SaaS</h6>
                <p>By James</p>
              </div>
            </div>
            <p>82%</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center">
              <div className="p-3 icon">
                <Image src="/favicon_io/bebo.svg" height={24} width={24} />
              </div>
              <div>
                <h6 className="text-h6">Briviba SaaS</h6>
                <p>By James</p>
              </div>
            </div>
            <p>82%</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
          <h5 className="mb-5 text-h5">Notifications</h5>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-md bg-secondary">
              <Image src="/asset/testImage.jpg" height={45} width={45} />
            </div>
            <div>
              <h6 className="text-h6">Briviba SaaS</h6>
              <p>By James</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
