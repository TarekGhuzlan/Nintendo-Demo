import React from "react";

const Highlight = () => {
  return (
    <div className="mt-16 py-12">
      <div className="mx-[118px]">
        <div className="grid grid-cols-2 grid-flow-col gap-7 items-start">
          <div className="">
            <h2 className="font-bold text-[1.3125rem]">
              You're moving to the valley...
            </h2>
            <div className="flex flex-col items-start mb-4">
              <div className="mb-2 line-clamp-[10]">
                <p className="font-light text-base mt-4">
                  You’ve inherited your grandfather’s old farm plot in Stardew
                  Valley. Armed with hand-me-down tools and a few coins, you set
                  out to begin your new life. Can you learn to live off the land
                  and turn these overgrown fields into a thriving home? It won’t
                  be easy. Ever since Joja Corporation came to town, the old
                  ways of life have all but disappeared. The community center,
                  once the town’s most vibrant hub of activity, now lies in
                  shambles. But the valley seems full of opportunity. With a
                  little dedication, you might just be the one to restore
                  Stardew Valley to greatness!
                  <br />
                  <br />
                  Now with Multiplayer! Invite 1-3 players to join you in the
                  valley! Players can work together to build a thriving farm,
                  share resources, and build relationships with townspeople or
                  each other. As more hands are better than one, players have
                  the option to scale profit margin on produce sold for a more
                  challenging experience.
                </p>
              </div>
              <button className="border-4 border-transparent py-2 pr-2">
                <span className="font-bold inline-flex items-center text-[--vertical-color] hover:text-[--button-hover]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="24"
                    role="presentation"
                    alt=""
                    data-testid="PlusIcon"
                    color="currentColor"
                    size="24"
                    className="pr-2 w-4.5"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M32.04 12h-12V0h-8v12h-12v8h12v12h8V20h12v-8z"
                    ></path>
                  </svg>
                  <p>Read more</p>
                </span>
              </button>
              <p className="font-light text-xs">
                Software description provided by the publisher.
              </p>
            </div>
            <button className="text-lg text-white font-bold px-6 h-12 bg-[--vertical-color] rounded-xl flex items-center justify-center hover:scale-105 hover:bg-[--button-hover]">
              <span>Explore this game's official website</span>
            </button>
          </div>
          <div className="items-center">
            <img
              className="rounded-lg"
              src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/en_US/games/switch/s/stardew-valley-switch/hero"
              alt=""
              width="558"
              height="314"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
