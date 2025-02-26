"use client";
import { DriveImageGetData } from "@/data/schemas";
import { useQuery } from "@tanstack/react-query";

async function loadImage(src: string) {
  const res = await fetch("/drive-image", {
    method: "POST",
    body: JSON.stringify({
      url: src,
    }),
  });
  const data = await res.json();
  return data as DriveImageGetData;
}

type ImageProps = {
  src: string;
  alt: string;
} & React.ComponentPropsWithoutRef<"img">;

export function Image({ src: propSrc, ...props }: ImageProps) {
  const isDriveLink = propSrc.startsWith("https://drive");
  const query = useQuery({
    queryFn: () => loadImage(propSrc),
    queryKey: ["loadImage", props.alt],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: isDriveLink,
  });
  const src = (isDriveLink ? query.data?.src : propSrc) as string;
  if (query.isFetching) {
    return (
      <div className="animate-pulse flex items-center justify-center w-full h-full bg-secondary p-4">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img src={src} {...props} />;
}
