import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";

function ResultDownload() {
  return (
    <div>
      <div>
        <PageHeader pagetitle="Result Download" nav="Result Download" />
        <Card>
          <h1 className="mb-4 text-2xl font-bold uppercase tracking-wide text-blue-900">
            <span className="border-b-2 border-orange-500">Result Down</span>
            <span className="border-b-2 border-blue-900">load</span>
          </h1>
          <p>Coming soon...</p>
        </Card>
      </div>
    </div>
  );
}

export default ResultDownload;
