import { useCallback } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

// Import required actions.
import { sepia } from '@cloudinary/url-gen/actions/effect';

declare global {
  var cloudinary: any;
}

type ImageUploadProps = {
  value: string;
  onChange: (value: string) => void;
};

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange }) => {
  const uploadHandler = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo',
    },
  });

  // Use the image with public ID, 'front_face'.
  const myImage = cld.image('front_face');

  // Apply the transformation.
  myImage.effect(sepia()); // Apply a sepia effect.

  // Render the transformed image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );

  // return (
  //   <CldUploadWidget
  //     onUpload={uploadHandler}
  //     uploadPreset="gzp6natx"
  //     options={{ maxFiles: 1 }}
  //   >
  //     {({ open }) => (
  //       <div
  //         onClick={() => open?.()}
  //         className="relative border-dashed border-2 border-neutral-300 p-20 flex flex-col justify-center items-center gap-4 text-neutral-600 cursor-pointer transition hover:opacity-70"
  //       >
  //         <TbPhotoPlus size={50} />
  //         <div className="font-semibold text-lg">Click to upload</div>
  //         {value && (
  //           <div className="absolute w-full h-full">
  //             <img
  //               className=" absolute w-full h-full object-cover"
  //               src={value}
  //               alt="Upload"
  //               style={{ objectFit: 'cover' }}
  //             />
  //           </div>
  //         )}
  //       </div>
  //     )}
  //   </CldUploadWidget>
  // );
};

export default ImageUpload;
