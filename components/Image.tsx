import React from "react";
import IImage from "next/image";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

type ImageSize = number | `${number}` | undefined;

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: ImageSize;
  height: ImageSize;
  placeholder?: PlaceholderValue | undefined;
}

const Image = ({ alt, width, height, src, ...props }: Props) => {
  return (
    <IImage
      src={`https://image.tmdb.org/t/p/w500${src}`}
      width={width}
      height={height}
      alt={alt}
      {...props}
    />
  );
};

export default Image;
