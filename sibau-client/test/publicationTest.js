const data = [
  {
    Id: 2,
    Title: "Prodpectus",
    Authors: "Sukkur IBA",
    Link: "motivation letter_20230722092255015Z.pdf",
    Year: "2023-07-21",
    JounalName: "Prodpectus",
    Type: "Sukkur IBA - Prospectus",
  },
  {
    Id: 3,
    Title: "News Letter",
    Authors: "Sukkur IBA",
    Link: "haseeb-cv_20230722092411743Z.pdf",
    Year: "2023-07-15",
    JounalName: "News Letter",
    Type: "Sukkur IBA - Newsletter",
  },
  {
    Id: 8,
    Title: "Phd -5",
    Authors: "Sukkur IBA",
    Link: "node web api url issue_20230722092651157Z.docx",
    Year: "2023-07-18",
    JounalName: "Phd -5",
    Type: "MS - PhD - Booklet",
  },
  {
    Id: 8,
    Title: "Phd -5",
    Authors: "Sukkur IBA",
    Link: "node web api url issue_20230722092651157Z.docx",
    Year: "2023-07-18",
    JounalName: "Phd -5",
    Type: "MS - PhD - Booklet",
  },
  {
    Id: 8,
    Title: "Phd -5",
    Authors: "Sukkur IBA",
    Link: "node web api url issue_20230722092651157Z.docx",
    Year: "2023-07-18",
    JounalName: "Phd -5",
    Type: "MS - PhD - Booklet",
  },
];

const objectOfTypes = {};
data.forEach((item) => {
  if (objectOfTypes[item.Type]) {
    objectOfTypes[item.Type].push(item);
  } else objectOfTypes[item.Type] = [{ ...item }];
});

console.log(Object.keys(objectOfTypes));
