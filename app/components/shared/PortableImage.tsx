import ImageComponent from "./ImageComponent";

type imageProp = {
  value: {
    alt: string;
    caption: string;
  };
};

export default function SampleImageComponent({ value }: imageProp) {
  return (
    <figure className="my-5 xs:my-6 sm:my-7 md:my-8 lg:my-10">
      <ImageComponent src={value} alt={value.alt} />
      {value.caption && (
        <figcaption className="mt-2 xs:mt-2.5 sm:mt-3 md:mt-3.5 lg:mt-4 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
}
