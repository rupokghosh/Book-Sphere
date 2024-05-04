import githubLogo from "../assets/GITHUBLOGO.png";

const Footer = () => {
  return (
    <div className="flex justify-between items-center pt-4 mx-8 px-8 mb-4 gap-16 border-2 border-t-slate-900 border-b-0 border-r-0 border-l-0 border-dashed">
      <div className="text-xl"> • A project by Rupok</div>
      <a href="https://github.com/rupokghosh/Book-Sphere">
        <img src={githubLogo} alt="" />
      </a>
      <div className="texl-xl"> • Design inspired by eduarda mirelly</div>
    </div>
  );
};

export default Footer;
