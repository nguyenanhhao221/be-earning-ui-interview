import Image from "next/image";
import React from "react";
import AvatarImg from "../../public/user-avatar.webp";

export const User = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src={AvatarImg}
          alt="user avatar"
          className="avatar h-10 w-10 rounded-full object-contain object-center"
          placeholder="blur"
        />

        <div>
          <h4 className="text-lg text-neutral-1 xs:text-sm">Minh Nguyen</h4>
          <p className="text-secondary">@Meta</p>
        </div>
      </div>
    </div>
  );
};
