
interface Props {
  url: string | null | undefined;
  height: number;
  width: number;
}

function Image({ height, width, url }: Props) {
  const fallBackImage = "https://via.placeholder.com/300x300"; // imagen placeholder
  
  if (!url) {
    return <img src={fallBackImage} height={height} width={width} />;
  }

  return (
    <img
      src={url}
      height={height}
      width={width}
      onError={(e:any) => {
        e.target.onerror = null;
        e.target.src = fallBackImage;
      }}
    />
  );
}

export default Image;
