export default function Tooltip({
  message,
  children,
}: {
  message: string;
  children: any;
}) {
  return (
    <div className="group relative flex mt-3">
      {children}
      <div className="absolute z-10 text-center inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        {message}
      </div>
    </div>
  );
}
