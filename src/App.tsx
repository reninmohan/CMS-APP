import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/ui/Loader';

const StudentProfile = lazy(() => import('./pages/StudentProfile'));
const SyllabusDownload = lazy(() => import('./pages/SyllabusDownload'));
const StudyMaterialDownload = lazy(() => import('./pages/StudyMaterialDownload'));
const AdmitDownload = lazy(() => import('./pages/AdmitDownload'));
const ResultDownload = lazy(() => import('./pages/ResultDownload'));
const Error = lazy(() => import('./components/ui/Error'));
const AppLayout = lazy(() => import('./components/ui/AppLayout'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate replace to="/profile" />} />
          <Route path="profile" element={
            <Suspense fallback={<Loader/>}>
              <StudentProfile />
            </Suspense>
          } />
          <Route path="syllabus" element={
            <Suspense fallback={<Loader/>}>
              <SyllabusDownload />
            </Suspense>
          } />
          <Route path="study-material" element={
            <Suspense fallback={<Loader/>}>
              <StudyMaterialDownload />
            </Suspense>
          } />
          <Route path="admit-download" element={
            <Suspense fallback={<Loader/>}>
              <AdmitDownload />
            </Suspense>
          } />
          <Route path="result-download" element={
            <Suspense fallback={<Loader/>}>
              <ResultDownload />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<Loader/>}>
              <Error />
            </Suspense>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
