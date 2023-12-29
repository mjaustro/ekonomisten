import * as XLSX from 'xlsx';

export function parseExcelFile(file: File) {
  const reader = new FileReader();
  reader.onload = (event: ProgressEvent<FileReader>) => {
      const excelData = event.target?.result;
      const workbook = XLSX.read(excelData, { type: 'string', cellDates: true });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      
      const data = XLSX.utils.sheet_to_json(worksheet, {  });
      console.log(data);
  };
  reader.readAsBinaryString(file);
}
