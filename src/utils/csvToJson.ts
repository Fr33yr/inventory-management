const xhr = new XMLHttpRequest();

type CsvData = {
  users: string;
  email: string;
  phone: string;
};

export function csvToJson() {
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const csvData: string = xhr.responseText;
      const rows: string[] = csvData.split("\n");
      const headers: string[] = rows[0]
        .split(",")
        .map((header) => header.trim());
      if (
        headers[0] !== "users" ||
        headers[1] !== "email" ||
        headers[2] !== "phone"
      ) {
        console.error("Invalid CSV headers");
        return;
      }
      const jsonData: CsvData[] = [];
      for (let i = 1; i < rows.length; i++) {
        const currentRow: string[] = rows[i].split(",");
        if (currentRow.length !== 3) {
          console.error(`Invalid row data at row ${i}`);
          continue;
        }
        const obj: CsvData = {
          users: currentRow[0],
          email: currentRow[1],
          phone: currentRow[2].trim(),
        };
        jsonData.push(obj);
      }
      const json: string = JSON.stringify(jsonData);
      console.log(json);
    }
  };
  xhr.open("GET", "data.csv");
  xhr.send();
}
