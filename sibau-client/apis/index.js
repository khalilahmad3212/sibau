const { default: axios } = require("axios");
import { cache } from "react";

const SERVER = "http://localhost:5001";
export const getTenderData = async () => {
  const result = await fetch(`${SERVER}/file-data`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

export const getGallery = async () => {
  const result = await fetch(`${SERVER}/gallery`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};
export const getValueByKey = async (key) => {
  const result = await fetch(`${SERVER}/map-resources/key/${key}`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

export const getNews = async () => {
  const result = await fetch(`${SERVER}/news`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};
export const getNewsById = async (id) => {
  const result = await fetch(`${SERVER}/news/${id}`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};
export const getJobData = async () => {
  const result = await fetch(`${SERVER}/file-data/page/Jobs`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

export const getEmployees = async (limit) => {
  const result = await fetch(`${SERVER}/employee`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  if (limit) return json.slice(0, limit);
  return json;
};

export const getSliderData = async () => {
  const result = await axios.get(`${SERVER}/slider`);
  return result.data;
};

export const getCareers = async () => {
  const result = await fetch(`${SERVER}/careers`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

export const getTenders = async () => {
  const result = await fetch(`${SERVER}/tender`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

export const getRFQs = async () => {
  const result = await fetch(`${SERVER}/rfqs`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};
export const getPublications = async () => {
  const result = await fetch(`${SERVER}/publication`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

export const getValuesByPage = async (page) => {
  const result = await fetch(`${SERVER}/map-resources/page/${page}`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};
export const getSchemaByDepartment = async (department) => {
  const result = await fetch(`${SERVER}/semester-data/${department}`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

// To do
export const infoByEmployeeId = async (id) => {
  console.log(`${SERVER}/employee-info/employee/${id}`);
  const result = await fetch(`${SERVER}/employee-info/employee/${id}`);
  const json = await result.json();
  console.log("value,", json);
  if (json?.statusCode === 404) return null;
  return json;
};

export const getProgramByTag = async (department) => {
  const result = await fetch(`${SERVER}/employee/${department}`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

export const getProgramsByDepartment = async () => {
  const result = await fetch(`${SERVER}/depart-specialization`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

export const getPrograms = async () => {
  const result = await fetch(`${SERVER}/depart-specialization`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

export const getDepartments = async () => {
  const result = await fetch(`${SERVER}/department`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

export const getPhds = async () => {
  const result = await fetch(`${SERVER}/employee/type/phds`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

export const getEmployeeByEmployeeId = async (id) => {
  const result = await fetch(`${SERVER}/employee/emp/${id}`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

export const getEmployeesByDepartment = async (id) => {
  const result = await fetch(`${SERVER}/employee/department/${id}`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

export const getDepartmentById = async (id) => {
  const result = await fetch(`${SERVER}/department/${id}`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};

export const getDepartmentList = async (id) => {
  const result = await fetch(`${SERVER}/department/list`, {
    next: {
      revalidate: 30,
    },
  });
  const json = await result.json();
  return json;
};
