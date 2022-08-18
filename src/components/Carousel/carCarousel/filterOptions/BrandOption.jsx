import React from 'react';
import Select from '../../../ui/select/Select';
import Option from '../../../ui/select/Option';
import useFetch from '../../../../hooks/useFetch';
import API_CONSTANT_MAP from '../../../../api/endpoints';

const BrandOption = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.brands}`);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <Select name='' id='' defaultValue='brand'>
      <Option value={'brand'} disabled>
        merke
      </Option>
      {data &&
        data.data.map((brand) => {
          return (
            <Option value={brand.attributes.brand} key={brand.id}>
              {brand.attributes.brand}
            </Option>
          );
        })}
      ;
    </Select>
  );
};

export default BrandOption;
