import React from "react";
import Button from "./common/button";
import ReadMore from "./common/readMore";

const Highlight = ({ game }) => {
  return (
    <section className="w-full mt-8 md:mt-16 py-8 md:py-12 scroll-mt-[120px]">
      <div className="container mx-4 md:mx-auto w-[96%] max-w-[71.5rem]">
        <div className="grid md:grid-cols-2 gap-7 items-start">
          <div className="block">
            <h2 className="font-bold max-sm:text-[1.125rem] text-[1.3125rem]">
              You're moving to the valley...
            </h2>
            <div className="flex flex-col items-start mb-4">
              <div></div>
              <ReadMore
                text={[
                  <p className="font-light max-sm:text-[0.875rem] text-base leading-[1.4rem] mt-4 mb-2 ">
                    You’ve inherited your grandfather’s old farm plot in Stardew
                    Valley. Armed with hand-me-down tools and a few coins, you
                    set out to begin your new life. Can you learn to live off
                    the land and turn these overgrown fields into a thriving
                    home? It won’t be easy. Ever since Joja Corporation came to
                    town, the old ways of life have all but disappeared. The
                    community center, once the town’s most vibrant hub of
                    activity, now lies in shambles. But the valley seems full of
                    opportunity. With a little dedication, you might just be the
                    one to restore Stardew Valley to greatness!
                    <br />
                    <br />
                    Now with Multiplayer! Invite 1-3 players to join you in the
                    valley! Players can work together to build a thriving farm,
                    share resources, and build relationships with townspeople or
                    each other. As more hands are better than one, players have
                    the option to scale profit margin on produce sold for a more
                    challenging experience.
                  </p>,
                ]}
                className="line-clamp-[10]"
              />
              <p className="font-light max-sm:text-[0.625rem] text-xs">
                Software description provided by the publisher.
              </p>
            </div>
            <div>
              <Button
                className="max-sm:w-full px-6 h-12 max-sm:text-base text-lg"
                label="Explore this game's official website"
              />
            </div>
          </div>
          <div className="relative items-center overflow-hidden">
            <img
              className="rounded-2xl object-contain w-full"
              src={game.image}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
