import { useRef, ChangeEvent } from "react";
import { ImUpload } from "react-icons/im";
import cls from "./construct-image.module.scss";
import { useAppDispatch } from "@/shared/hooks/redux-hooks.ts";
import { changeSiteElementUrl } from "@/entities/site/model/site.selectors.ts";
import { Button } from "@/shared/ui/button";
import { toast } from "react-toastify";
interface ConstructImageProps {
  edit: boolean;
  id: string;
  url?: string;
  width: number;
  height: number;
}

export const ConstructImage = ({ id, edit, url, width, height }: ConstructImageProps) => {
  const dispatch = useAppDispatch();
  const inputFile = useRef<HTMLInputElement>(null);

  const upload = (file: string | Blob): Promise<string> => {
    return new Promise((resolve, reject): void => {
      const formData = new FormData();
      formData.append("image", file);

      fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_LOAD_IMAGE_KEY}`, {
        method: "POST",
        body: formData,
      })
        .then(response => response.json())
        .then(result => {
          dispatch(changeSiteElementUrl(id, result.data.url));
          resolve(result.data.url);
        })
        .catch(_ => {
          toast.error("Ошибка загрузки файла!");
          reject("Upload failed");
        });
    });
  };

  const onButtonClick = () => {
    if (inputFile.current) inputFile.current.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const file = (event.target.files && event.target.files[0]) || "";
    await upload(file);
  };

  return (
    <>
      <input
        type="file"
        id="file"
        onChange={onChangeFile}
        ref={inputFile}
        style={{ display: "none" }}
      />
      {edit && (
        <Button className={cls.upload_button} onClick={onButtonClick}>
          <ImUpload />
        </Button>
      )}

      <div className={cls.image_block} style={{ backgroundImage: `url(${url})`, width, height }}>
        {!url && "Изображение"}
      </div>
    </>
  );
};
