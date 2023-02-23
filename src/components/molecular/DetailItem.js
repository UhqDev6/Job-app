import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaBriefcase } from 'react-icons/fa';
import parse from 'html-react-parser';

import { postedAt } from '../../utils';
import Button from '../atoms/Button';

function DetailItem(props) {
  const { id } = props;
  const [detailData, setDetailData] = useState([]);
  const [isReadMore, setIsReadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleBtn = () => {
    setIsReadMore((prevState) => !prevState);
  };
  const getDetailData = (uuid) => {
    fetch(
      '/positions.json',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((myJson) => {
        const myData = myJson.find((item) => item.id === uuid);
        setDetailData(myData);
        setIsLoading(false);
      });
  };

  const smartSubstr = (str, len) => {
    let temp = str.substr(0, len);
    if (temp.lastIndexOf('<') > temp.lastIndexOf('>')) {
      temp = str.substr(0, 1 + str.indexOf('>', temp.lastIndexOf('<')));
    }
    return temp;
  };

  useEffect(() => {
    getDetailData(id);
  }, [id]);
  return (
    <div>
      {
        isLoading ? (
          <p>loading</p>
        ) : (
          <div>
            <div>
              <h1 className="text-xl font-semibold">
                {
                  detailData?.title
                }
              </h1>
            </div>
            <div>
              <div className="w-full flex gap-2">
                <div className="flex-none">
                  <Link to={detailData?.company_url}>
                    <p className="text-sm mt-2 text-slate-500 hover:underline">
                      {
                        detailData?.company
                      }
                    </p>
                  </Link>
                </div>
                <p className="text-sm mt-2 text-slate-500">
                  { ' , ' }
                </p>
                <div className="flex-none">
                  <p className="text-sm mt-2 text-slate-500">
                    (
                    {
                      detailData?.location
                    }
                    )
                  </p>
                </div>
                <p className="text-sm mt-2 text-slate-500">
                  { ' - ' }
                </p>
                <div className="w-full flex-initial">
                  <p className="text-xs mt-[10px] text-green-800 font-medium">
                    {
                      postedAt(detailData?.created_at)
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-none mt-4">
                <FaBriefcase color="#6B728E" />
              </div>
              <div className="w-full flex-initial mt-4">
                <p className="text-xs text-slate-500">
                  {
                    detailData?.type
                  }
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <Button
                type="button"
                className="bg-pink-500 p-2 text-[10px] mt-4 w-24"
              >
                <p className="mx-auto">
                  Easy Apply
                </p>
              </Button>
              <Button
                type="button"
                className="border-pink-500 border-[1px] text-pink-500 p-2 text-[10px] mt-4 w-16"
              >
                <p className="mx-auto">
                  Save
                </p>
              </Button>
            </div>
            <div>
              <div>
                <h1 className="mt-8 text-sm font-semibold">Job Description</h1>
              </div>
              <div>
                <div className="text-xs mt-2 font-light">
                  {
                    parse(isReadMore && detailData?.description ? `${detailData?.description}` : `${smartSubstr(detailData?.description, 350)}...`)
                  }
                </div>
                <button
                  type="button"
                  onClick={toggleBtn}
                  className="text-xs font-medium text-slate-600 underline mt-2"
                >
                  {
                    isReadMore ? 'Show Less' : 'Read More'
                  }
                </button>
              </div>
            </div>
            <div>
              <div>
                <h1 className="mt-8 text-sm font-semibold">How to Apply</h1>
              </div>
              <div>
                <div className="text-xs mt-2 font-light">
                  {
                    parse(detailData?.how_to_apply ? detailData?.how_to_apply : '')
                  }
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1 className="mt-8 text-sm font-semibold">About the company</h1>
              </div>
              <div className="flex mt-2 border-[1px] p-2 rounded-xl">
                <div className="flex-none max-w-[6rem] max-h-[6rem] mx-auto">
                  <img src={detailData?.company_logo} alt={detailData?.company_logo} />
                </div>
                <div className="flex-initial w-full">
                  <p className="mt-4">
                    {
                      detailData?.title
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

DetailItem.propTypes = {
  id: PropTypes.string,
};

DetailItem.defaultProps = {
  id: '',
};

export default DetailItem;
