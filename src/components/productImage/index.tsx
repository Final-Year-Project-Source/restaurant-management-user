import { Skeleton } from 'antd';
import Image from 'next/image';
import { FC, useState } from 'react';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  classNameImage?: string;
}

const ProductImage: FC<Props> = ({ src, alt, width, height, className }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const dimensionImage = {
    width,
    height,
  };

  return (
    <div className={`${className || ''} flex flex-col items-center shrink-0`} style={dimensionImage}>
      {loading && <Skeleton.Button style={dimensionImage} active />}
      <Image
        className="shrink-0"
        priority
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        width={width}
        height={height}
        src={src || '/assets/images/product-default.png'}
        alt={alt}
        style={{ opacity: loading ? 0 : 1 }}
      />
    </div>
  );
};

export default ProductImage;
