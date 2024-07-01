import React from "react";
import Button from "./common/button";
import ReadMore from "./common/readMore";

const Highlight = ({ game }) => {
  return (
    <div className="container mx-auto max-w-6xl mt-16 py-12">
      <div>
        <div className="grid grid-cols-2 grid-flow-col gap-7 items-start">
          <div>
            <h2 className="font-bold text-[1.3125rem]">
              You're moving to the valley...
            </h2>
            <div className="flex flex-col items-start mb-4">
              <div className="  "></div>
              <ReadMore
                text={[
                  <p className="font-light text-base mt-4 mb-2 ">
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
              <p className="font-light text-xs">
                Software description provided by the publisher.
              </p>
            </div>
            <div>
              <Button
                className="px-6 h-12 text-lg"
                label="Explore this game's official website"
              />
            </div>
          </div>
          <div className="items-center">
            <img
              className="rounded-2xl"
              src={game.image}
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
