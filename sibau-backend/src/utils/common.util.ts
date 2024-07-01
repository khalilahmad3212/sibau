import * as fs from 'fs';
import * as path from 'path';

export function uploadFile(file, docsPath) {

  const fileExtension = path.extname(file.originalname);
  const fileNameWithoutExtension = path.basename(
    file.originalname,
    fileExtension,
  );

  const currentDateTime = new Date().toISOString().replace(/[:\-T.]/g, '');
  const newFileName = `${fileNameWithoutExtension}_${currentDateTime}${fileExtension}`;
  const uploadPath = path.join('uploads', docsPath); // Specify the upload directory path
  const filePath = path.join(uploadPath, newFileName);

  // Create the directory if it doesn't exist
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  // Write the file to the specified path
  fs.writeFileSync(filePath, file.buffer);

  return newFileName;
}

export function deleteFile(filename, docsPath) {
  const uploadPath = path.join('./uploads', docsPath); // Specify the upload directory path
  const filePath = path.join(uploadPath, filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Deleted file ${filename}`);
    }
  });
}