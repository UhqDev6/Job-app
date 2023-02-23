import React from 'react';
import { useParams } from 'react-router-dom';
import DetailItem from '../components/molecular/DetailItem';

function DetailPage() {
  const { id } = useParams();
  return (
    <div className="w-full justify-center p-10">
      <div>
        <DetailItem id={id} />
      </div>
    </div>
  );
}

export default DetailPage;
