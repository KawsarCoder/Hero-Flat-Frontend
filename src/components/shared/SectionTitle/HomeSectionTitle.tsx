function HomeSectionTitle({
  mainTitle,
  subTitle,
}: {
  mainTitle?: string;
  subTitle?: string;
}) {
  return (
    <div className=" mt-6 text-center">
      <h1 className=" font-Lora font-semibold sm:text-3xl text-2xl px-4 text-gray-900 text-center">
        {mainTitle}
      </h1>
      <p className=" mt-1 font-Ubuntu font-normal sm:text-lg text-lg px-4">
        {subTitle}
      </p>
    </div>
  );
}

export default HomeSectionTitle;
