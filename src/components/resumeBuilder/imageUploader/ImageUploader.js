import React, {useState} from 'react';
import "antd/dist/antd.css";
import { Upload, message } from "antd";
import ImgCrop from "antd-img-crop";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  // function beforeUpload(file) {
  //   const isJPG = file.type === "image/jpeg";
  //   const isPNG =  file.type === "image/png";
  //   if (!isJPG && !isPNG) {
  //     message.error("You can only upload JPG/PNG file!");
  //   }
  //   // const isLt1M = file.size / 1024 <2;
  //   // if (!isLt1M) {
  //   //   message.error("Image must smaller than 1MB!");
  //   // }
  //   return (isJPG || isPNG);
  // }
 
function ImageUploader() {
    const [loading, setLoading] = useState(false);
    const [ imageUrl, setImageUrl] = useState("");
    const [attachmentId, setAttachmentId] = useState("")

    const PATH_PREFIX = "http://localhost:"
const beforeUpload =(file) =>  {
    
    if (file.type !== "image/png" && file.type !== "image/jpeg") {
        message.error("You can only upload JPG or PNG file!")
    }else{
     return file.type === "image/png" || file.type === "image/jpeg";
    }
};

console.log("image url", imageUrl);
    const handleChange = (info) => {
        if (info.file.status === "uploading") {
          setLoading(!loading);
        }
        if (info.file.status === "done") {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (imageUrl) =>{
           setImageUrl(imageUrl)
           setLoading(!loading)}
          );
        }
      };

      const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
      };

      const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
     const customRequest = (options) => {
        const data = new FormData();
        data.append("attachment", options.file);
        axios({
            url: PATH_PREFIX + "/api/file/save",
            method: "post",
            data: data,
            headers: {
                "Content-Type":
                    "multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s",
                "X-Requested-With": "XMLHttpRequest",
            },
        }).then((response) => {
           setAttachmentId( response.data.id,
            );
        });
    };

    return (
        <ImgCrop grid>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange}
          onPreview={onPreview}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
        </Upload>
      </ImgCrop>
    )
}

export default ImageUploader
