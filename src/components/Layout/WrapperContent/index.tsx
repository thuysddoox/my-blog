const WrapperContent = ({ title, children, className }: { title: string; children: any; className?: string }) => {
  return (
    <div
      className={`relative rounded-lg border border-black pt-11 px-0 p-6 sm:px-4 xl:px-6 bg-content dark:bg-[#8dc4d1] shadow-md mb-14 ${className}`}
    >
      <span
        className={`absolute shadow-md bg-pink-50 dark:bg-[#EAFDFC] top-0 py-1 px-6 -translate-y-1/2 inline-block border border-black rounded-[32px] font-extrabold text-xl sm:text-2xl font-title`}
      >
        {title}
      </span>
      <div>{children}</div>
    </div>
  );
};

export default WrapperContent;
