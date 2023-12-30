import { useState } from 'react';
import { parseExcelFile } from '../../utils/excelParser';
import { FilePreview } from '../FilePreview';

export function FileChooser() {

  const [files, setFiles] = useState<unknown[][][]>([]);

  const inputId = crypto.randomUUID();
  const acceptedFileTypes = [
    "text/plain",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ];

  async function handleFileInput(event: React.ChangeEvent<HTMLInputElement>) {
    let newFiles: any[][][] = [];
    if (event.target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        switch (event.target.files[i].type) {
          case "text/plain":
            console.log("Textfil");
            break;
          case "application/vnd.ms-excel":
          case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            const workbooks = await parseExcelFile(event.target.files[i]);
            newFiles.push(workbooks);
            break;
          default:
            console.log("Ogiltigt filformat");
            break;
        }
      }
    }

    setFiles(newFiles);
  }

  return (
    <div>
      <div className="form-field">
        <label htmlFor={inputId}>Välj fil med pengahistorik</label>
        <input type="file" 
              id={inputId} 
              name={inputId} 
              onChange={handleFileInput}
              accept={acceptedFileTypes.join()} />
      </div>
      <div className="file-preview">
        {files.map(file => <FilePreview parts={file} />)}
      </div>
    </div>
  );
}
