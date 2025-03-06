import birdLogo from "/home/user/find-the-bird/src/assets/download (1).png";  // Adjust the path as neededimport UploadPage from './components/UploadPage'

const Header = () => {
    return (
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8eef3] px-10 py-3">
<div className="flex items-center gap-4 text-[#0e161b]">

 <img src={birdLogo} alt="Bird Logo" className="h-8 w-10 pr-0 "/>
<h2 className="text-[#0e161b] text-lg pl-0 font-bold leading-tight tracking-[-0.015em]">Know you Bird</h2>

</div>
<div className="flex gap-2">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e8eef3] text-[#0e161b] text-sm font-bold">
  <span className="truncate">Sign in</span>
</button>
</div>
</header>
);
};

export default Header