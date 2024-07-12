// ImageUpload.tsx
import { CldUploadWidget } from "next-cloudinary";
import { Plus, Trash } from "lucide-react";

import { Button } from "../ui/button";
import Image from "next/image";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string[]) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {
  const onUpload = (result: any) => {
    const newImageUrls = Array.isArray(result.info.secure_url)
      ? result.info.secure_url
      : [result.info.secure_url];
    onChange([...value, ...newImageUrls]);
  };
  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 mb-4">
        {value.map((url) => (
          <div key={url} className="relative">
            <div className="absolute top-0 right-0 z-10">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                size="sm"
                className="bg-red-600 text-white"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            {url && (
              <Image
                src={url}
                alt="collection"
                className="object-cover rounded-lg"
                width={200}
                height={200}
                style={{ width: 'auto', height: 'auto' }}
              />
            )}
          </div>
        ))}
      </div>

      <CldUploadWidget uploadPreset="ichcykfw" onSuccess={onUpload}>
        {({ open }) => {
          return (
            <Button
              type="button"
              onClick={() => open()}
              className="bg-grey-1 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
