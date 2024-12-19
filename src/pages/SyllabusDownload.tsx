import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import { syllabusData } from "../data/fakeData";
import { FiDownload } from "react-icons/fi";
import { FaRegFilePdf } from "react-icons/fa6";

function SyllabusDownload() {
  return (
    <div>
      <div>
        <PageHeader pagetitle="Syllabus Download" nav="Syllabus Download" />
        <Card>
          <h1 className="mb-4 text-2xl font-bold uppercase tracking-wide text-blue-900">
            <span className="border-b-2 border-orange-500">Syllabus Down</span>
            <span className="border-b-2 border-blue-900">load</span>
          </h1>

          <div className="flex flex-col gap-4">
            {syllabusData.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-lg border p-4 shadow-md">
                <div className="flex items-center gap-4">
                  <FaRegFilePdf />
                  <div>
                    <h3 className="font-semibold">{item.subject}</h3>
                    <p className="text-sm text-gray-600">{item.semester}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">Last updated: {item.lastUpdated}</span>
                  <button className="text-blue-500 transition-all duration-200 hover:text-blue-200">
                    <FiDownload />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default SyllabusDownload;
