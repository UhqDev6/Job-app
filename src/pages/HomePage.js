/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PaginationButtons from '../components/atoms/PaginationButton';
import SearchCheckbox from '../components/atoms/SearchCheckbox';
import SearchText from '../components/atoms/SearchText';
import Wrapper from '../components/atoms/Wrapper';
import ListJob from '../components/molecular/ListJob';
import useInput from '../hooks/useInput';

function HomePage() {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useInput(() => searchParams.get('search') || '');
  const [isLoading, setIsLoading] = useState(true);

  const onSearchChangeHandler = (search) => {
    setSearch(search);
    setSearchParams({ search });
  };

  const getData = () => {
    fetch(
      'positions.json',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((myJson) => {
        const myData = myJson.filter((item) => {
          if (item.title.toString().toLowerCase().includes(search.toLowerCase())) return true;
          if (item.location.toString().toLowerCase().includes(search.toLowerCase())) return true;
        });
        setIsLoading(false);
        setData(myData);
      });
  };

  useEffect(() => {
    getData();
  }, [getData()]);
  return (
    <Wrapper>
      <div className="w-full justify-center md:mx-auto p-10 md:p-20">
        <div className="flex mx-auto md:justify-center gap-8">
          <div className="flex-none md:w-1/2">
            <SearchText search={search} searchChange={onSearchChangeHandler} />
          </div>
          <div className="flex-none mt-[17px] text-xs">
            <div className="flex gap-4">
              <div className="flex-none font-light text-slate-500">
                <p className="text-xs">Full time</p>
              </div>
              <div className="flex-initial w-full">
                <SearchCheckbox />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <ListJob job={data} isLoading={isLoading} />
        </div>
        <div>
          <PaginationButtons />
        </div>
      </div>
    </Wrapper>
  );
}

export default HomePage;
