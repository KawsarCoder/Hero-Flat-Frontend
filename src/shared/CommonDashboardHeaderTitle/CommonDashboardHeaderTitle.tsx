const CommonDashboardHeaderTitle = ({
  mainTitle,
  secondaryTitle,
}: {
  mainTitle: string;
  secondaryTitle?: string;
}) => {
  return (
    <>
      <h1 className=" text-2xl font-semibold font-Ubuntu mt-3">{mainTitle}</h1>
      <p className=" text-sm font-normal font-Ubuntu">{secondaryTitle}</p>
    </>
  );
};

export default CommonDashboardHeaderTitle;
