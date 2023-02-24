import React from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from '../components/atoms/Wrapper';
import DetailItem from '../components/molecular/DetailItem';

function DetailPage() {
  const { id } = useParams();
  return (
    <Wrapper>
      <div className="w-full justify-center p-10 md:p-20">
        <div>
          <DetailItem id={id} />
        </div>
      </div>
    </Wrapper>
  );
}

export default DetailPage;
