
const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
        <span className="text-white font-bold text-xl">A</span>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        AppName
      </span>
    </div>
  );
};

export default Logo;
