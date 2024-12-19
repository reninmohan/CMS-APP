import { studentData } from "../data/fakeData";
import Card from "../components/ui/Card";
import Row from "../components/ui/Row";
import Col from "../components/ui/Col";
import PageHeader from "../components/ui/PageHeader";

function StudentProfile() {
  return (
    <div>
      <PageHeader pagetitle="Student Profile" nav="Student Profile" subtitle="CMS Student Profile" />
      <Card>
        <h1 className="text-2xl font-bold uppercase tracking-wide text-blue-900">
          <span className="border-b-2 border-orange-500">Student Pro</span>
          <span className="border-b-2 border-blue-900">file</span>
        </h1>
        <div className="relative mt-6 rounded-md border-2 border-blue-900 bg-white p-4 pb-10 shadow-xl">
          <img src={studentData.image} alt="" className="absolute right-[0.90rem] top-[4.5rem] h-36 w-32 rounded-sm border-[6px] bg-center" />
          <div id="details" className="flex flex-col justify-center">
            <h3 className="place-self-center font-extrabold uppercase text-blue-900">Course/programe details:</h3>
            <Row />
            <Row>
              <Col>
                <p>form no.</p>
                <p className="before:pr-4 before:content-[':']">{studentData.formNo}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Admission year</p>
                <p className="before:pr-4 before:content-[':']">{studentData.admissionYear}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Registration No.</p>
                <p className="before:pr-4 before:content-[':']">{studentData.registrationNo}</p>
                <p>Fautly</p>
                <p className="before:pr-4 before:content-[':']">{studentData.faculty}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>course type</p>
                <p className="before:pr-4 before:content-[':']">Post Graduate</p>
                <p>Course name</p>
                <p className="before:pr-4 before:content-[':']">{studentData.courseName}</p>
              </Col>
            </Row>
            <br />
            <br />
            <h3 className="place-self-center font-extrabold uppercase text-blue-900">Personal Details</h3>
            <Row />
            <Row>
              <Col>
                <p>Name (Mr./Ms.)</p>
                <p className="before:pr-4 before:content-[':']">{studentData.name}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Father&apos;s Name(Mr.)</p>
                <p className="before:pr-4 before:content-[':']">{studentData.fatherName}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Gender</p>
                <p className="before:pr-4 before:content-[':']">{studentData.gender}</p>
                <p>Category</p>
                <p className="before:pr-4 before:content-[':']">{studentData.category}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Date of Birth</p>
                <p className="before:pr-4 before:content-[':']">{studentData.dateOfBirth}</p>
                <p>Nationality</p>
                <p className="before:pr-4 before:content-[':']">{studentData.nationality}</p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button className="text-blue-700 transition-all duration-200 hover:text-blue-300">Download id Card</button>
        </div>
      </Card>
    </div>
  );
}

export default StudentProfile;
