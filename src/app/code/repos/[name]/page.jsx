import Link from 'next/link';
import Repo from './../../../components/Repo';
import RepoDirs from './../../../components/RepoDirs';
import { Suspense } from 'react';

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link className="btn btn-back" href="/code/repos">
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
