const Header = () => {
  return (
    <>
      <header className="flex flex-col items-center gap-y-2">
        <div className="w-10/12 py-8">Header</div>
        <hr className="w-full border-gray-200" />
      </header>
      <header className="sticky top-0 bg-white z-10 flex flex-row justify-center">
        <div className="w-10/12 py-4">Sub Header</div>
      </header>
    </>
  );
};

export default Header;
