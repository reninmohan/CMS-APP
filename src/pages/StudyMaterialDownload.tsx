import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import { studyMaterialData } from "../data/fakeData";
import { FaRegFilePdf } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

function StudyMaterialDownload() {
  return (
    <div>
      <div>
        <PageHeader pagetitle="Study Material Download" nav="Study Material" />
        <Card>
          <h1 className="mb-4 text-2xl font-bold uppercase tracking-wide text-blue-900">
            <span className="border-b-2 border-orange-500">Study Mate</span>
            <span className="border-b-2 border-blue-900">rial</span>
          </h1>
          <div className="flex flex-col gap-4">
            {studyMaterialData.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <FaRegFilePdf />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      {item.type} • {item.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">Uploaded: {item.uploadDate}</span>
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

export default StudyMaterialDownload;
