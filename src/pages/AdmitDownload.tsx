import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";

function AdmitDownload() {
  return (
    <div>
      <div>
        <PageHeader pagetitle="Admit Download" nav="Admit Download" />
        <Card>
          <h1 className="mb-4 text-2xl font-bold uppercase tracking-wide text-blue-900">
            <span className="border-b-2 border-orange-500">Admit Card Down</span>
            <span className="border-b-2 border-blue-900">load</span>
          </h1>
          <div>
            <p>Coming soon...</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AdmitDownload;
