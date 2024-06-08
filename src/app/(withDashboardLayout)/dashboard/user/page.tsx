import CommonDashboardHeaderTitle from "@/shared/CommonDashboardHeaderTitle/CommonDashboardHeaderTitle";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
function AdminHomePage() {
  const data = [
    {
      id: 0,
      icon: ApartmentIcon,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      title: "Totat Flat",
      count: 1500,
    },
    {
      id: 1,
      icon: MoveToInboxIcon,
      color: "#0E9F6E",
      bgColor: "#DEF7EC",
      title: "Flat Request",
      count: 1200,
    },
    {
      id: 2,
      icon: LocationCityIcon,
      color: "#3F83F8",
      bgColor: "#E1EFFE",
      title: "My Flat",
      count: 500,
    },
    {
      id: 3,
      icon: DomainVerificationIcon,
      color: "#0694A2",
      bgColor: "#D5F5F6",
      title: "Flat Confirmed",
      count: 200,
    },
  ];
  return (
    <section>
      <CommonDashboardHeaderTitle mainTitle="Welcome to Dashboard" />
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 mt-6">
        {data?.map((item) => (
          <div
            key={item?.id}
            className="grid justify-items-center p-4 bg-purple-100 rounded-md shadow-lg text-purple-600"
          >
            <div
              className={`w-12 h-12 bg-purple-600 p-3 rounded-full text-white text-center `}
            >
              {item.icon && <item.icon />}
            </div>
            <div>
              <p className="my-1 text-center text-xl font-semibold font-Ubuntu">
                {item.title}
              </p>
              <p className="text-xl font-Lora font-semibold text-center">
                {item.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminHomePage;
