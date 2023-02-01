import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 p-5">
      <input
        type="text"
        required
        placeholder="UserName"
        className="border p-1 border-gray-400 rounded-lg peer"
      />
      <span className="hidden peer-invalid:block peer-invalid:text-red-500">
        This input in invalid
      </span>
      <span className="hidden peer-hover:block peer-valid:text-teal-500">
        Awesome username
      </span>
      <input type="submit" value="Login" className="bg-white" />
    </form>
  );
};

export default Home;
