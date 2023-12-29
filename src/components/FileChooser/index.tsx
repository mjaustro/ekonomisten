import { parseExcelFile } from '../../utils/excelParser';

export function FileChooser() {

  const inputId = crypto.randomUUID();
  const acceptedFileTypes = [
    "text/plain",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ];

  function handleFileInput(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        switch (event.target.files[i].type) {
          case "text/plain":
            console.log("Textfil");
            break;
          case "application/vnd.ms-excel":
          case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            parseExcelFile(event.target.files[i]);
            break;
          default:
            console.log("Ogiltigt filformat");
            break;
        }
      }
    }
  }

  return (
    <div className="form-field">
      <label htmlFor={inputId}>Välj fil med pengahistorik</label>
      <input type="file" 
             id={inputId} 
             name={inputId} 
             onChange={handleFileInput}
             accept={acceptedFileTypes.join()} />
    </div>
  );
}
