import React from 'react';

const BirdingWebsite = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden" style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8eef3] px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-[#0e161b]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_535)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_535"><rect width="48" height="48" fill="white"></rect></clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em]">Birding</h2>
        </div>
        <SearchBox />
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <ActionButtons />
        <ProfilePicture />
      </div>
    </header>
  );
};

const SearchBox = () => {
  return (
    <label className="flex flex-col min-w-40 !h-10 max-w-64">
      <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
        <div
          className="text-[#507a95] flex border-none bg-[#e8eef3] items-center justify-center pl-4 rounded-l-xl border-r-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
            ></path>
          </svg>
        </div>
        <input
          placeholder="Search"
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border-none bg-[#e8eef3] focus:border-none h-full placeholder:text-[#507a95] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
          value=""
        />
      </div>
    </label>
  );
};

const ActionButtons = () => {
  return (
    <div className="flex gap-2">
      <button
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#1f93e0] text-[#f8fafb] text-sm font-bold leading-normal tracking-[0.015em]"
      >
        <span className="truncate">Post</span>
      </button>
      <button
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e8eef3] text-[#0e161b] text-sm font-bold leading-normal tracking-[0.015em]"
      >
        <span className="truncate">Ask</span>
      </button>
      <button
        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#e8eef3] text-[#0e161b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
      >
        <div className="text-[#0e161b]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  );
};

const ProfilePicture = () => {
  return (
    <div
      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
      style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/a245309c-1e3c-4d2e-ab37-e62e455b4346.png")' }}
    ></div>
  );
};

const MainContent = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <NavigationTabs />
        <BannerSection />
        <PopularSpecies />
      </div>
    </div>
  );
};

const NavigationTabs = () => {
  return (
    <div className="pb-3">
      <div className="flex border-b border-[#d1dde6] px-4 gap-8">
        <TabLink text="Following" active={false} />
        <TabLink text="For You" active={false} />
        <TabLink text="Birding" active={true} />
      </div>
    </div>
  );
};

const TabLink = ({ text, active }) => {
  return (
    <a 
      className={`flex flex-col items-center justify-center border-b-[3px] ${active ? 'border-b-[#1f93e0] text-[#0e161b]' : 'border-b-transparent text-[#507a95]'} pb-[13px] pt-4`} 
      href="#"
    >
      <p className={`${active ? 'text-[#0e161b]' : 'text-[#507a95]'} text-sm font-bold leading-normal tracking-[0.015em]`}>
        {text}
      </p>
    </a>
  );
};

const BannerSection = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/ab06df74-5063-4bcc-b1c4-04804031798c.png")' }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Birding for beginners
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              First time birding? This guide will help you get started on this relaxing and rewarding hobby
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1f93e0] text-[#f8fafb] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
            <span className="truncate">Read Guide</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularSpecies = () => {
  const birdImages = [
    "https://cdn.usegalileo.ai/sdxl10/0aa9f8f6-07c1-4760-861d-193e182020ec.png",
    "https://cdn.usegalileo.ai/sdxl10/b89f6aac-2566-4a77-85fa-305758ae2ae9.png",
    "https://cdn.usegalileo.ai/sdxl10/5f777d8a-00c1-4bb7-a26f-c868ff8d6492.png",
    "https://cdn.usegalileo.ai/sdxl10/1532ad9b-6db6-4bd7-9486-3b637724c6f2.png",
    "https://cdn.usegalileo.ai/sdxl10/0169daad-7d55-4874-831e-f03bcea84310.png"
  ];

  return (
    <>
      <h2 className="text-[#0e161b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Popular Species</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {birdImages.map((imageUrl, index) => (
          <BirdCard key={index} imageUrl={imageUrl} />
        ))}
      </div>
    </>
  );
};

const BirdCard = ({ imageUrl }) => {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
    </div>
  );
};

export default BirdingWebsite;