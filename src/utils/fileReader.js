const fs = require('fs');

const FILE_PATH = '../sources/task3file'

const countValueColumnInFile = async () => {
  try {
    const data = fs.readFileSync(FILE_PATH).toString();
    const linesTmp = data.split(/(\r\n)|(\n\r)|\n|\r/);
    const lines = [];
    const processedData = [];

    linesTmp.forEach((line) => line?.trim() && lines.push(line));
    const titles = lines[0].split(',')

    for (let i = 1; i < lines.length; i++) {
      const splitLine = lines[i].split(',');
      const lineObject = {};
      for (let l = 0; l < splitLine.length; l++) {
        lineObject[titles[l]] = isNaN(splitLine[l]) ? splitLine[l] : parseInt(splitLine[l]);
      }
      processedData.push(lineObject);
    }

    let resultCount = 0;

    processedData.forEach((obj) => resultCount += obj.value);

    return resultCount;
  } catch (e) {
    console.error(e);
    return e;
  }
}

countValueColumnInFile()
