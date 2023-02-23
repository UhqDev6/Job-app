import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { postedAt } from '../../utils';

function ListJob() {
  const [data, setData] = useState([]);
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
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {
        data.map((jobList) => (
          <div key={jobList?.id}>
            <div className="w-full mt-5 flex gap-2 border-b-[0.1px] border-pink-100">
              <div className="flex-none">
                <div className="max-w-[4rem] max-h-[4rem] rounded-full mx-auto">
                  <img src={jobList?.company_logo} alt={jobList?.company_logo} />
                </div>
              </div>
              <div className="flex-initial w-full">
                <div>
                  <Link to={`/detail/${jobList?.id}`}>
                    <h3 className="text-pink-400 text-base font-semibold hover:underline mt-2">
                      {
                        jobList?.title
                      }
                    </h3>
                  </Link>
                </div>
                <div>
                  <Link to={jobList?.company_url}>
                    <p className="text-xs mt-1 text-slate-900 hover:underline">
                      {
                        jobList?.company
                      }
                    </p>
                  </Link>
                </div>
                <div>
                  <div className="w-full flex gap-2">
                    <div className="flex-none">
                      <p className="text-xs mt-1 text-slate-400">
                        {
                          jobList?.location
                        }
                      </p>
                    </div>
                    <p className="text-xs mt-1 text-slate-400">
                      { ' - ' }
                    </p>
                    <div className="w-full flex-initial">
                      <p className="text-xs mt-1 text-slate-400">
                        {
                          jobList?.type
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs mt-2 text-green-800 font-medium">
                    {
                      postedAt(jobList?.created_at)
                    }
                  </p>
                </div>
                <br />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ListJob;
