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
            {dummyData.map((user) => {
              return (
                <tr key={user.id}>
                  <td>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/asset/testImage.jpg"
                        height={45}
                        width={45}
                        className="rounded-md"
                        alt="User image"
                      />
                      <div>
                        <p className="text-h6">{user.name}</p>
                      </div>
                    </div>
                  </td>

                  <td className="flex items-center gap-2">
                    <button
                      className="icon"
                      onClick={() => handleDelete(user.id)}
                    >
                      <Image
                        src="/asset/delete.png"
                        height={16}
                        width={16}
                        alt="Delete icon"
                      />
                    </button>
                    <button
                      className="icon"
                      onClick={() => handleSuspend(user.id)}
                    >
                      <Image
                        src="/asset/suspend.png"
                        height={16}
                        width={16}
                        alt="Suspend icon"
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </DashboardLayout>
    </>
  );
};

export default CamManage;
