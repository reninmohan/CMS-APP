interface SyllabusData {
    id: number;
    subject: string;
    semester: string;
    lastUpdated: string;
  }
  
  interface StudyMaterialData {
    id: number;
    title: string;
    type: string;
    uploadDate: string;
    size: string;
  }
  
  interface StudentData {
    formNo: string;
    admissionYear: string;
    registrationNo: string;
    faculty: string;
    courseType: string;
    courseName: string;
    name: string;
    fatherName: string;
    gender: string;
    category: string;
    dateOfBirth: string;
    nationality: string;
    image: string;
  }
  
  export const syllabusData: SyllabusData[] = [
    {
      id: 1,
      subject: "Mathematics",
      semester: "Semester 1",
      lastUpdated: "2023-06-01",
    },
    {
      id: 2,
      subject: "Physics",
      semester: "Semester 1",
      lastUpdated: "2023-07-15",
    },
    {
      id: 3,
      subject: "Chemistry",
      semester: "Semester 1",
      lastUpdated: "2023-08-20",
    },
    {
      id: 4,
      subject: "Biology",
      semester: "Semester 1",
      lastUpdated: "2023-09-10",
    },
    {
      id: 5,
      subject: "Computer Science",
      semester: "Semester 1",
      lastUpdated: "2023-10-05",
    },
  ];
  
  export const studyMaterialData: StudyMaterialData[] = [
    {
      id: 1,
      title: "Introduction to Calculus",
      type: "PDF",
      uploadDate: "2024-03-10",
      size: "2.5 MB",
    },
    {
      id: 2,
      title: "Fundamentals of Physics",
      type: "PDF",
      uploadDate: "2024-02-25",
      size: "45 MB",
    },
    {
      id: 3,
      title: "Organic Chemistry Basics",
      type: "PDF",
      uploadDate: "2024-01-15",
      size: "1.8 MB",
    },
    {
      id: 4,
      title: "Biology: Cell Structure",
      type: "PDF",
      uploadDate: "2024-03-05",
      size: "3.2 MB",
    },
    {
      id: 5,
      title: "Programming with Python",
      type: "PDF",
      uploadDate: "2024-04-01",
      size: "4.0 MB",
    },
  ];
  
  export const studentData: StudentData = {
    formNo: "333914",
    admissionYear: "2023",
    registrationNo: "239102093948",
    faculty: "Faculty of Commerce and Management",
    courseType: "Post Graduate",
    courseName: "MBA (Banking and Finance)",
    name: "Sharanjeet singh",
    fatherName: "Parbinder singh",
    gender: "Male",
    category: "General",
    dateOfBirth: "2002-06-30",
    nationality: "Indian",
    image: "college-boy.png",
  };
  