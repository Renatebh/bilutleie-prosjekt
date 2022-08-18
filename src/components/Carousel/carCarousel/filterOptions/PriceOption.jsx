import React from 'react';
import Select from '../../../ui/select/Select';
import Option from '../../../ui/select/Option';
import useFetch from '../../../../hooks/useFetch';
import API_CONSTANT_MAP from '../../../../api/endpoints';

const PriceOption = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.prices}`);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <Select name='' id='' defaultValue='price'>
      <Option value={'price'} disabled>
        pris
      </Option>
      {data &&
        data.data.map((price) => {
          return (
            <Option value={price.attributes.price} key={price.id}>
              {price.attributes.price}
            </Option>
          );
        })}
      ;
    </Select>
  );
};

export default PriceOption;
