import { CloudinaryImageUploadAdapter } from 'ckeditor-cloudinary-uploader-adapter';

export const getCookieFromReq = (req, cookieKey) => {
  const cookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${cookieKey}=`));

  if (!cookie) { return undefined };

  return cookie.split('=')[1];
}


export const shortenText = (text, maxLength = 124) => {
  if (text && text.length > maxLength) {
    return `${text.substring(0, maxLength)} ...`;
  }

  return text;
}

export const imagePluginFactory = (editor) => {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new CloudinaryImageUploadAdapter(
      loader,
      'ssr-react-blog-files',
      'ckeditor-upload'
      // [ 160, 500, 1000, 1052 ]
    );
  };
}
