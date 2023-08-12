import { dummyData } from "@/contants";
import DashboardLayout from "@/components/DashboardLayout";
import Image from "next/image";

const CamManage = () => {
  function handleDelete(id) {
    console.log("Delete id:", id);
  }
  function handleSuspend(id) {
    console.log("Suspend id:", id);
  }
  return (
    <>
      <DashboardLayout>
        <table className="w-full tabble">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Minutes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jonas Schmedtmann</td>
              <td>jonas@mail.com</td>
              <td>12345</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </DashboardLayout>
    </>
  );
};

export default CamManage;
