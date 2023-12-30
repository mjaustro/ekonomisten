import * as XLSX from 'xlsx';

export function parseExcelFile(file: File): Promise<any[][]> {
  return new Promise((resolve, reject) => {
    let excelTables: any[][] = [];

    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      try {
        const excelData = event.target?.result;
        const workbook = XLSX.read(excelData, { type: 'string', cellDates: true });
        workbook.SheetNames.forEach(worksheetName => {
          const worksheet = workbook.Sheets[worksheetName];
          if (worksheet) {
            const worksheetData = XLSX.utils.sheet_to_json(worksheet, {  });
            excelTables.push(worksheetData);
          }
        });
        resolve(excelTables);
      } 
      catch (error) {
        reject(error);
      }
    };
    reader.onerror = (event: ProgressEvent<FileReader>) => {
      reject(event.target?.error);
    };

    reader.readAsBinaryString(file);
  });
}
